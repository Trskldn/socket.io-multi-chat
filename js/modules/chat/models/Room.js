define(['Backbone'], function(Backbone) {

	var Room = Backbone.Model.extend({
		urlRoot: 'chat',

		defaults: function (){
			// this.messages = new MessagesCollection();
			// this.users = new UsersCollection();
			this.topic = '';
			this.selected = false;
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
