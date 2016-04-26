define([
'backbone', 
'./../models/Message',
'core/linkSocketMixin',
'core/CappedCollection'
], function(Backbone, MessageModel, linkSocketMixin, CappedCollection) {

	var Messages = CappedCollection.extend({
		model: MessageModel,
		
		sync: Backbone.IoSync,

		cap: 20
	});

	_.extend(Messages.prototype, linkSocketMixin);	
	return Messages;
});
