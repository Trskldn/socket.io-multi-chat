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
    });

 
    socket.on('rooms:read', function () {
      console.log('rooms:read ');
      socket.emit('rooms:read', {success: true, data: rooms});
    });

    socket.on('*', function (data) {
      console.log('* ', data);
    }); 


    var id = 0;
    socket.on('message:read', function () {
      console.log('message:read ');
      socket.emit('message:read', rooms);
    });
 
    socket.on('chat:1:message:create', function (data) {
      console.log('chat:1:message:create ');
      data.id = Math.floor(Math.random()*1000);
      data.success = true;
      io.emit('chat:1:message:add', data);
    });

    setInterval(function() {
      socket.emit('chat:1:message:add', { id: id++, 'text':'test'+id, 'userId': 1, user:'username', 'threadId':1, timestamp: Date.now() });
    }, 3000);
});

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
  

var rooms = [
{name: 'name44',id: 1,
users:[
{
  name: 'name'
},
{
  name: 'name2'
},
{
  name: 'name3'
},
],
messages:[
{
  text: 'hi!',
  date: new Date(),
  user: 'name'
},
{
  text: 'hi!',
  date: new Date(),
  user: 'name'
},
{
  text: 'hi!',
  date: new Date(),
  user: 'name2'
},
{
  text: 'hi!',
  date: new Date(),
  user: 'name3'
}
]
},
{name: 'name2',id: 2},
{name: 'name3',id: 3}];
