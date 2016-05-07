define(function() {


	return _.extend({
		initialize: function(models, options) {
			this.inherited('initialize', arguments);
			this._initializeBSEM();
		},

		_initializeBSEM: function() {
			this._socketListeners = this._sockListeners || [];
			if (this.socketEvents && _.size(this.socketEvents) > 0) {
				this.delegateSocketEvents(this.socketEvents);
			}
		},

		delegateSocketEvents: function(events) {
			for (var key in events) {
				var method = events[key];
				if (!_.isFunction(method)) {
					method = this[method];
				}

				if (!method) {
					throw new Error('Method "' + events[key] + '" does not exist');
				}

				method = _.bind(method, this);
				// _.bindAll(this, method);
				app.socket.on(key, method)
				this._socketListeners.push({
					event: key,
					handler: method
				});
			}
		},

		removeSocketEvents: function() {
			var listener;

			while ((listener = this._socketListeners.pop())) {
				app.socket.off(listener.event, listener.handler);
			}
		}
	});

});
