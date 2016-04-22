define(['backbone', './../models/Message'], function(Backbone, MessageModel) {

	var Messages = Backbone.Collection.extend({
		model: MessageModel,
		url: function() {
			return (this.parent && this.parent.url() || '') + '/messages';
		}
	});

	return Messages;
});
