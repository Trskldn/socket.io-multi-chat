define(['Backbone', 'models/User'], function(Backbone, UserModel) {

	var Users = Backbone.Collection.extend({
		model: UserModel;
	});

	return Users;
});
