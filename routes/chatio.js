module.exports = function(app) {

var rooms = {};
var users = {};
var messageId = 0;
var io = app.get('io');
  
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


    socket.on('message:read', function () {
      console.log('message:read ');
      socket.emit('message:read', rooms);
    });
 
    socket.on('chat:1:message:create', function (data) {
      console.log('chat:1:message:create ',data);
      data.id = messageId++;
      data.success = true;
      data.userId = socket.id;
      console.log('chat:1:message:create ',data);

      io.emit('chat:1:message:add', data);
    });

    setInterval(function() {
      socket.emit('chat:1:message:add', { id: messageId++, 'text':'test'+messageId, 'userId': 1, user:'username', 'threadId':1, timestamp: Date.now() });
    }, 3000);
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

};