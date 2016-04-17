define(['Backbone', 'models/user'], function(Backbone, UserModel) {

	var Users = Backbone.Collection.extend({
		model: UserModel;
	});

	return Users;
});
