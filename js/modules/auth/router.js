define(['Backbone', './views/LoginView'], function(Backbone, LoginView) {
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
			var loginView = new LoginView();
			this.options.app.region.show(loginView);
		},

		showSignup: function() {

		},

		showLogout: function() {
			
		}
	});

	return Router;
});