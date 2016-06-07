define(['backbone', 'underscore'], function(Backbone, _) {

	var MessagesStore = function(socket) {
		this._socket = socket;
		this.initialize();
		this._messages = [];
	};

	MessagesStore.prototype = _.extend({}, Backbone.Events, {
            initialize: function () {
                this._socket.on('message:create', _.bind(this._onMessageCreate, this));
                this._socket.on('message:read', _.bind(this._onMessageRead, this));
                this._socket.emit('message:read');
            },

            _onMessageCreate: function (data) {
                this._messages.push(data);
                this.trigger('change', data);
                this.trigger('add', data);
            },

            _onMessageRead: function (data) {
                this._messages = data;
                this.trigger('reset', data);
            },

            destroy: function () {

            },

            getAllMessageForThread: function (threadId) {
                return _.filter(this._messages, function (item) {
                    return item.threadId == threadId;
                });
            }
        }
    );

	return MessagesStore;
});
