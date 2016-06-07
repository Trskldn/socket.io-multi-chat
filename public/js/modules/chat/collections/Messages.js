define([
	'backbone',
	'./../models/Message',
	'core/CappedCollection',
	'core/utils/BindSocketEventsMixin'
], function(Backbone, MessageModel, /*linkSocketMixin,*/ CappedCollection, BindSocketEventsMixin) {

	var Messages = CappedCollection.extend([{
		model: MessageModel,

		sync: Backbone.IoSync,
		
		cap: 20,

		socketEvents: {
			'message': '_onMessageRecive'
		},

		_onMessageRecive: function(message) {
			if (message.threadId == this.threadId) this.add(message);
		}
	}, BindSocketEventsMixin]);

	return Messages;
});
