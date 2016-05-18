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
			deps: ['underscore', 'jquery', 'text', 'jquery.serializeJSON'],
			exports: 'Backbone'
		},

		'backbone.routemanager': {
			"deps": ['backbone']
		},

		'bootstrap': {
			"deps": ['jquery']
		}
	},

	paths: {
		'jquery': './../components/jquery/dist/jquery',
		'underscore': './../components/underscore/underscore',
		'backbone': './../components/backbone/backbone',
		'pagejs': './../components/page/page',
		'backbone-fetch-cache': './../components/backbone-fetch-cache/backbone.fetch-cache',
		'bootstrap': "./../components/bootstrap/dist/js/bootstrap",
		'backbone.routemanager': "./../components/backbone.routemanager/backbone.routemanager",
		'socket.io': "./../components/socket.io-client/socket.io",
		'text': "./../components/text/text",
		'underscore.string': "./../components/underscore.string/underscore.string",
		'backbone.inherited': "./../components/backbone.inherited/backbone.inherited",
		'backbone.multi-extend': "./../components/backbone.multi-extend/backbone.multi-extend",
		'jquery.serializeJSON': "./../components/jquery.serializeJSON/jquery.serializejson"
	}
});

require(['backbone.multi-extend'], function() {
	require(['app'], function(App) {
		window.app = new App();
		app.socket.on('connect', function() {
			var token = localStorage.getItem('token');

			if (token) {
				app.socket.emit('login', {
					token: token
				}, function(data) {
					app.session.setUser(data.user);
					app.start();
				});
			} else {
				app.start();
			}
		});
	});
});