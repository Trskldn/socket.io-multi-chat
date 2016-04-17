var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    io = require('socket.io')(server),
    port = 8080;


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname));

io.sockets.on('connect', function (socket) {
    socket.on('me:read', function (data) {
      console.log('me:read ', data);
      socket.emit('me:read', {name:'new name', success: true});
    })
});

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
