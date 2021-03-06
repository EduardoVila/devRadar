const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const { setupWebSocket } = require('./websocket')

const cors = require('cors')
const app = express()
const server = http.Server(app)
setupWebSocket(server)

mongoose.connect('mongodb+srv://Eduardo:ardodevila153@cluster0-0wytb.mongodb.net/api?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3030)