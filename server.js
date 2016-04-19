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

 
    socket.on('contacts:read', function () {
      console.log('contacts:read ');
      socket.emit('contacts:read', {success: true, data: contacts});
    })

    socket.on('*', function (data) {
      console.log('* ', data);
    })     
});

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
  

var contacts = [
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
{name: 'name3',id: 3},
{name: 'name4',id: 4},
{name: 'name5',id: 5},
{name: 'name6',id: 6},
{name: 'name7', id: 7}
];
