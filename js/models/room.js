define(['Backbone'], function(Backbone) {

	var Room = Backbone.Model.extend({
		defaults:{
			messages: new MessagesCollection(),
			users: new UsersCollection(),
			topic: ''
		}
	});

	return Room;
});
