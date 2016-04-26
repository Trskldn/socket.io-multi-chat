define(['backbone'], function(Backbone) {

	var Message = Backbone.Model.extend({
		defaults:{
			text: '',
			timestamp: new Date(),
			userId: '',
			user: '',
			threadId: '',
			thread: ''
		},

		sync: Backbone.IoSync,
	});

	return Message;
});
