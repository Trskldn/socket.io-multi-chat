define(['Backbone'], function(Backbone) {

	var User = Backbone.Model.extend({
		defaults:{
			name: ''
		}
	});

	return User;
});
