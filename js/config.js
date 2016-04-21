require.config({
	baseUrl: '/js/',

	shim: {
		'jQuery': {
			exports: '$'
		},

		'Underscore': {
			exports: '_'
		},

		'Backbone': {
			deps: ['Underscore', 'jQuery', 'text'],
			exports: 'Backbone'
		},

		"bootstrap" : {
			"deps" :['jQuery']
		}

	},

	paths: {
		jQuery: './../components/jquery/jquery',
		Underscore: './../components/underscore/underscore',
		Backbone: './../components/backbone/backbone',
		'backbone-fetch-cache': './../components/backbone-fetch-cache/backbone.fetch-cache',
		bootstrap: "./../components/bootstrap/dist/js/bootstrap",
		'socket.io': "./../components/socket.io-client/socket.io",
		text: "./../components/text/text",
		"Underscore.string": "./../components/underscore.string/underscore.string"
	}
});


require(['app'],	function (app) {
	window.app = app;
	app.start();
});
