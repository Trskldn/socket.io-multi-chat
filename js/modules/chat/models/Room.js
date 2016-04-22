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
			console.log(arguments);
			this.set('messages', new Messages(attr.messages, {url: 'rooms/'+this.id+'/messages' }));
			this.set('users', new Users(attr.users, {url: 'rooms/'+this.id+'/users' }));
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
