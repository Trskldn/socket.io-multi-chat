define(['Backbone', 'models/message'], function(Backbone, MessageModel) {

	var Messages = Backbone.Collection.extend({
		model: MessageModel
	});

	return Messages;
});
