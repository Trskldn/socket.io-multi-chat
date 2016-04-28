define(['backbone'], function(Backbone) {
	var Session = Backbone.Model.extend({
		defaults: {
			username: 'username',
			password: 'password'
		},
		
		urlRoot: '/login'
	});

	return new Session();
});