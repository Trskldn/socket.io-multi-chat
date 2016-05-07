define(function() {
	var SocketAdaptor = function(opts) {
		this.socket = opts.socket;	
		if (!this.socket) throw new TypeError('socket must be specific');
		this.initialize();
	};

	_.extend(SocketAdaptor.prototype, Backbone.Events, {
		socketMap: function() {

		},

		initialize: function() {
                this._socket.on('message:create', _.bind(this._onMessageCreate, this));
                this._socket.on('message:read', _.bind(this._onMessageRead, this));
                this._socket.emit('message:read');
		}


	});

	return SocketAdaptor;
});