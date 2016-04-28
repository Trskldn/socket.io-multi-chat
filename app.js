var nconf = require('nconf'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);


nconf.argv()
 .env()
 .file({ file: './config.json' });

app.set('io', io);
require('./boot/index')(app);
require('./routes/index')(app);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});