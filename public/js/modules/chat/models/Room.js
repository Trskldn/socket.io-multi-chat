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

			// this.messages.url = this.url() + '/message';
			// this.messages.link('add', 'remove');

			this.users = new Users(attr.users);

			// this.users.url = this.url() + '/user';
			// this.users.link('add', 'remove');

			// this.listenTo(app.vent, this.messages.url, this.addMessage, this);
			// this.listenTo(app.vent, this.users.url, this.addUser, this);
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