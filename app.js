var nconf = require('nconf'),
  express = require('express'),
  app = express(),
  log4js = require('log4js'),
  log = log4js.getLogger("startup"),
  server = require('http').createServer(app),
  io = require('socket.io')(server);


nconf.argv()
  .env()
  .file({
    file: './config.json'
  });

app.set('io', io);

require('./boot/index')(app);
require('./routes/index')(app);

log4js.configure('./log4js.json');

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
  log.info('Express server listening on port ', server.address().port, " with pid ", process.pid);
});
