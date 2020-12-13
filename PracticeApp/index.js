const express = require('express')
const Sequelize = require('sequelize')
const jwt = require("jsonwebtoken");
const routes = require('./src/routes/Route')
const cors = require('cors');


const app = express()


const port = 3000
app.use(express.json());
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.use('/', routes)


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('sendMessage', (message) => {
        console.log(message)
        socket.emit('message', message);
    });
    
});

