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
var bodyParser = require('body-parser');

io.on('connection', socket => {
    console.log('User online:' + socket.id)
    
     socket.on('drawing', (data)=> {
            socket.broadcast.emit('drawing', data);
            
      })
})

nextApp.prepare().then(() => {
    const showRoutes = require("./routes/index.js");
   app.use(bodyParser.json());
    app.use("/api", showRoutes(server));
    app.all('*', (req, res) => {
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