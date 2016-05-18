define(['backbone', './../shared/models/User'], function(Backbone, User) {
	var Session = Backbone.Model.extend({
		defaults: {
			isLogged: false
		},

		urlRoot: '/login',

		initialize: function() {
			this.user = new User();
			this.inherited('initialize', arguments);
			this.on('change:isLogged', this._onLoggedChange, this);
		},

		setUser: function(user) {
			if (user) {
				app.session.set('isLogged', true);
				app.session.user.set(user);
			} else {
				app.session.set('isLogged', false);
				app.session.user.clear();
			}
		},

		_onLoggedChange: function(session) {
			var isLogged = session.get('isLogged');
			console.log('sessiont isloggedtriger', isLogged);
			this.trigger(isLogged ? 'signin' : 'signout');
		}
	});

	return new Session();
});