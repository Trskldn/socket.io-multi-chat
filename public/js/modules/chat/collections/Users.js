define([
       'backbone',
       './../models/User',
       'core/utils/BindSocketEventsMixin'
], function(Backbone, UserModel, /*linkSocketMixin, */ BindSocketEventsMixin) {

    var Users = Backbone.Collection.extend([{
	model: UserModel,

	socketEvents: {
	    'user_has_joined': '_onUserJoin',
	    'user_has_left': '_onUserLeft'
	},

	_onUserJoin: function() {
	    console.log('onUserJoin');
	},

	_onUserLeft: function() {
	    console.log('onUserLeave');

	},

	url: function() {
	    return (this.parent && this.parent.url() || '') + '/users';
	}
    }, BindSocketEventsMixin]);

    return Users;
});
