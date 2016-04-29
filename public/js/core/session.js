define(['backbone'], function(Backbone) {
	var Session = Backbone.Model.extend({
		defaults: {
			username: 'username',
			password: 'password'
		},
		
		urlRoot: '/login',

		initialize: function() {
			Backbone.Model.prototype.initialize.apply(this, arguments);
			this.on('destroy', function() {
				this.set({'isLogged': false});
			});
			this.on('change:isLogged', this._onLoggedChange, this);
		},

		_onLoggedChange: function(session) {
			var isLogged = session.get('isLogged');
			console.log('sessiont isloggedtriger', isLogged);
			this.trigger(isLogged ?  'signin' : 'signout');
		}
	});

	return new Session();
});