define(['backbone', './../models/User'], function(Backbone, UserModel) {

	var Users = Backbone.Collection.extend({
		model: UserModel,
		url: function() {
			return (this.parent && this.parent.url() || '') + '/users';
		}
	});

	return Users;
});
