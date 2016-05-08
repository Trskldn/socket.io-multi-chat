define(['backbone'], function(Backbone) {

	var Message = Backbone.Model.extend({
		defaults: {
			text: '',
			timestamp: new Date(),
			userId: '',
			user: '',
			threadId: '',
			thread: ''
		},

		urlRoot: 'message',

		sync: Backbone.IoSync
	});

	return Message;
});
