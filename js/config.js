require.config({
	baseUrl: '/js/',

	shim: {
		'jquery': {
			exports: '$'
		},

		'underscore': {
			exports: '_'
		},

		'backbone': {
			deps: ['underscore', 'jquery', 'text'],
			exports: 'Backbone'
		},

		"bootstrap" : {
			"deps" :['jquery']
		}

	},

	paths: {
		jquery: './../components/jquery/jquery',
		underscore: './../components/underscore/underscore',
		backbone: './../components/backbone/backbone',
		'backbone-fetch-cache': './../components/backbone-fetch-cache/backbone.fetch-cache',
		bootstrap: "./../components/bootstrap/dist/js/bootstrap",
		'socket.io': "./../components/socket.io-client/socket.io",
		text: "./../components/text/text",
		"underscore.string": "./../components/underscore.string/underscore.string"
	}
});


require(['app'],	function (app) {
	window.app = app;
	app.start();
});
