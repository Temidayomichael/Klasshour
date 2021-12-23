const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
})
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
var bodyParser = require('body-parser')

let users = []
const messages = []
io.on('connection', (socket) => {
	socket.on('join-server', (username, id) => {
		socket.id = id
		const user = {
			username,
			id: socket.id,
		}
		if (id !== null) {
			if (users) {
				users.push(user)
			} else {
				users = user
			}
		}
		console.log('userrrr:', users)
		io.emit('new-user', users)
	})
	socket.on('join-room', (roomName, cb) => {
		socket.join(roomName)
		cb(messages[roomName])
	})
	socket.on('send-message', ({ content, to, sender, chatName, isChannel }) => {
		if (isChannel) {
			const payload = {
				content,
				chatName,
				sender,
			}
			socket.to(to).emit('new-message', payload)
		} else {
			const payload = {
				content,
				chatName: sender,
				sender,
			}
			socket.to(to).emit('new-message', payload)
		}
		if (messages[chatName]) {
			messages[chatName].push({
				sender,
				content,
			})
		} else {
			messages.push({
				chatName: {
					sender,
					content,
				},
			})
		}
	})
	socket.on('disconnect', () => {
		users = users.filter((u) => u.id !== socket.id)
		io.emit('new user', users)
	})
	socket.on('canvas-data', (data) => {
		socket.broadcast.emit('canvas-data', data)
	})
})

nextApp
	.prepare()
	.then(() => {
		const showRoutes = require('./routes/index.js')
		app.use(bodyParser.json())
		app.use('/api', showRoutes(server))
		app.all('*', (req, res) => {
			return nextHandler(req, res)
		})
		server.listen(port, (err) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})
