var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = 8080;


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname));

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
