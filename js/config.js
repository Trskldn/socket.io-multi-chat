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

		// 'Layoutmanager': {
		// 	deps: ['Backbone']
		// },

		"bootstrap" : {
			"deps" :['jQuery']
		}

		// 'ApplicationRouter': {
		// 	deps: ['jQuery', 'Underscore', 'Backbone']
		// }
	},

	paths: {
		jQuery: './../components/jquery/jquery',
		Underscore: './../components/underscore/underscore',
		Backbone: './../components/backbone/backbone',
//		Layoutmanager: './core/backbone.layoutmanager',
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
