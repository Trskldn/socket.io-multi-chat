var express = require('express'),
    config = require('nconf'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    session = require('express-session'),
    sessionFileStore = require('session-file-store')(session),   
    sessionOptions = config.get('session'),
    sharedsession = require("express-socket.io-session"),
    passport = require('passport');

module.exports = function(app) {
	app.set('port', config.get('port') || 3000);
	app.set('view', './../views');
	app.set('view engine', 'jade');
	
	sessionOptions.store = new sessionFileStore();

	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(session(sessionOptions));
	app.use(express.static('public')); 

	app.use(passport.initialize()); 
	app.use(passport.session()); 

	app.get('io').use(sharedsession(session(sessionOptions), {autoSave: true}));
};