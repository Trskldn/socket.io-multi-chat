define([
	'backbone',
	'./../models/Message',
	// 'core/linkSocketMixin',
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
			// console.log('_onMessageRecive ', message);
			if (message.threadId == this.threadId) this.add(message);
		}
	}, BindSocketEventsMixin]);

	// _.extend(Messages.prototype, linkSocketMixin);
	// _.extend(Messages.prototype, BindSocketEventsMixin);
	return Messages;
});