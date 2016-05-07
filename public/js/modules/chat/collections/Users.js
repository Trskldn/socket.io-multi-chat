define([
	'backbone',
	'./../models/User',
	// 'core/linkSocketMixin',
	'core/utils/BindSocketEventsMixin'
], function(Backbone, UserModel, /*linkSocketMixin, */ BindSocketEventsMixin) {

	var Users = Backbone.Collection.extend([{
		model: UserModel,

		socketEvents: {
			'user_joined': '_onUserJoin',
			'user_leave': '_onUserLeave'
		},

		// initialize: function() {
		// 	// Backbone.Collection.prototype.initialize.apply(this, arguments);
		// 	this.inherited('initialize',arguments);
		// },

		_onUserJoin: function() {
			console.log('onUserJoin');
		},

		_onUserLeave: function() {
			console.log('onUserLeave');

		},

		url: function() {
			return (this.parent && this.parent.url() || '') + '/users';
		}
	}, BindSocketEventsMixin]);

	// _.extend(Users.prototype, linkSocketMixin);
	return Users;
});
