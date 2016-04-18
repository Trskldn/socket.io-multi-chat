define(['Backbone'], function(Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'auth/login': 'showLogin',
			'auth/signup': 'showSignup',
			'auth/logout': 'showLogout',
			'auth': 'defaultRoute' 
		},

		initialize: function(options) {
			this.options = options;
		},

		defaultRoute: function() { 
			Backbone.history.navigate("/auth/login"); 
		},

		showLogin: function() {
			console.log('showLogin');
		},

		showSignup: function() {

		},

		showLogout: function() {
			
		}
	});

	return Router;
});