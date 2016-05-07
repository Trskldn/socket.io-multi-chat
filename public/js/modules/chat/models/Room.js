define([
'backbone',
'./../collections/Messages',
'./../collections/Users'
], function(Backbone, Messages, Users) {

	var Room = Backbone.Model.extend({
		urlRoot: 'chat',

		defaults: function (){
			this.topic = '';
			this.selected = false;
		},

		initialize: function(attr, options) {
			this.messages = new Messages(attr.messages);
			this.messages.threadId = this.get('id');
			// this.messages.url = this.url()+'/message';
			// this.messages.link('add', 'remove');
	
			this.users = new Users(attr.users);
			// this.users.url = this.url()+'/user';
			// this.users.link('add', 'remove');

			// this.listenTo(app.vent, this.messages.url, this.addMessage, this);
			// this.listenTo(app.vent, this.users.url, this.addUser, this);
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
