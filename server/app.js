require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const cors = require('cors')
const router = require('./router/router')
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('update', function(){
    socket.emit('update')
    socket.broadcast.emit('update')
  })
});

http.listen(port, function(){
  console.log(`listening on :${port}`);
});