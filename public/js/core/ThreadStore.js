define(['backbone'], function(Backbone) {

	return Backbone.Collection.extend({

		initialize: function(options) {
			this._socket = options.socket;
			this.bindSocketEvent();
			Backbone.Collection.prototype.initialize.apply(this, arguments);
		},

		bindSocketEvent: function() {
            this._socket.on('thread:add', _.bind(this._onThreadAdd, this));
            this._socket.on('message:history', _.bind(this._onMessageHistory, this));
            this._socket.emit('message:history');
		}
	});
});