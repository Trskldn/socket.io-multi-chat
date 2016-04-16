define(['Backbone'], function( Backbone ) {

	return Backbone.Router.extend({
		routes: {
			//  '*': 'defaultAction',
			'room/:id': 'switchRoom',
			'login': 'login',
			'logout': 'logout'
		},

		initialize: function () {
				require(['views/MainView'], function(MainView) {
					new MainView({el: '#main'}).render();
				});
		},

		defaultAction: function() {
		},

		switchRoom: function (roomId) {

		},

		login: function () {

		},

		logout: function () {

		}
	});
});
