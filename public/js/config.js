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

		'backbone.routemanager': {
			"deps" :['backbone']
		},

		'bootstrap' : {
			"deps" :['jquery']
		}
	},

	paths: {
		jquery: './../components/jquery/jquery',
		underscore: './../components/underscore/underscore',
		backbone: './../components/backbone/backbone',
		pagejs: './../components/page/page',
		'backbone-fetch-cache': './../components/backbone-fetch-cache/backbone.fetch-cache',
		bootstrap: "./../components/bootstrap/dist/js/bootstrap",
		'backbone.routemanager': "./../components/backbone.routemanager/backbone.routemanager",
		'socket.io': "./../components/socket.io-client/socket.io",
		text: "./../components/text/text",
		'underscore.string': "./../components/underscore.string/underscore.string"
	}
});


require(['app'],	function (App) {
	window.app = new App();
	app.start();
});
