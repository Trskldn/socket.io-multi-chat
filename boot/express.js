var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    session = require('express-session'),
    sessionFileStore = require('session-file-store')(session),   
    sessionConf = { 
      store: new sessionFileStore(),
      secret: 'keyboard cat',
      cookie: { maxAge: 60000 },
      resave: false, 
      saveUninitialized: true 
    },    
    sharedsession = require("express-socket.io-session");

module.exports = function(app) {
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(session(sessionConf));
	app.use(express.static('public')); 

	app.get('io').use(sharedsession(session(sessionConf), {autoSave: true}));
};