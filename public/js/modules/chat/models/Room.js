define([
	'backbone',
	'./../collections/Messages',
	'./../collections/Users'
], function(Backbone, Messages, Users) {

	var Room = Backbone.Model.extend({
		urlRoot: 'chat',

		defaults: {
			topic: '',
			selected: false,
			unreadMsgCnt: 0
		},

		initialize: function(attr, options) {
			this.messages = new Messages(attr.messages);
			this.messages.threadId = this.get('id');
			this.listenTo(this.messages, 'add', this._onNewMessageAdd, this);
			this.users = new Users(attr.users);
		},

		_onNewMessageAdd: function() {
			if (this.get('selected')) {
				this.set('unreadMsgCnt', 0);
			} else {
				this.set('unreadMsgCnt', this.get('unreadMsgCnt') + 1);
			}
		},

		addMessage: function() {

		},

		addUser: function() {

		},

		unselect: function() {
			this.set('selected', false);
		},

		select: function() {
			this.set('selected', true);
		}
	});

	return Room;
});
