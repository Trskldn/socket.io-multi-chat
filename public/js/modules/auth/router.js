define(['backbone', './views/LoginView', './views/SignUpView'], function(Backbone, LoginView, SignUpView) {
	var Router = Backbone.Router.extend({
		routes: {
			'auth/login': 'showLogin',
			'auth/signup': 'showSignup',
			'auth/logout': 'doLogout',
			'auth': 'defaultRoute' 
		},

		initialize: function(options) {
			this.options = options;
		},

		defaultRoute: function() { 
			Backbone.history.navigate("/auth/login"); 
		},

		showLogin: function() {
			var loginView = new LoginView();
			this.options.app.region.show(loginView);
		},

		showSignup: function() {
			var signUpView = new SignUpView();
			this.options.app.region.show(signUpView);
		},

		doLogout: function() {
			app.socket.emit('logout', function() {
				localStorage.setItem('token', void 0);
				app.session.setUser();
				Backbone.history.navigate("home", {replace:true, trigger: true}); 
			});
		}
	});

	return Router;
});