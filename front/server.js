const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
        cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

io.on('connection', socket => {
    console.log('User online:' + socket.id)
    
     socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return nextHandler(req, res)
    })
    server.listen(port, (err) => {
        if (err) throw err
       console.log(`> Ready on http://localhost:${port}`)
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})