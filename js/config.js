require.config({
	// baseUrl: '/js/',

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

		'Layoutmanager': {
			deps: ['Backbone']
		},

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
		Layoutmanager: './common/backbone.layoutmanager',
		bootstrap: "./../components/bootstrap/dist/js/bootstrap",
		'socket.io': "./../components/socket.io-client/socket.io",
		text: "./../components/text/text"
	}
});


require(['main']);
