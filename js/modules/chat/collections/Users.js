define([
'backbone', 
'./../models/User',
'core/linkSocketMixin'
], function(Backbone, UserModel, linkSocketMixin) {

	var Users = Backbone.Collection.extend({
		model: UserModel,

		initialize: function() {
			Backbone.Collection.prototype.initialize.apply(this, arguments);
		},

		url: function() {
			return (this.parent && this.parent.url() || '') + '/users';
		}
	});

	_.extend(Users.prototype, linkSocketMixin);	
	return Users;
});
