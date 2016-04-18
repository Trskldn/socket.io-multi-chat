define(['Backbone', 'models/Message'], function(Backbone, MessageModel) {

	var Messages = Backbone.Collection.extend({
		model: MessageModel
	});

	return Messages;
});
