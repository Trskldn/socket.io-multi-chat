require(['Backbone'], function (Backbone) {
  var oldremove = Backbone.View.prototype.remove;

  Backbone.View = Backbone.View.extend({

      initialize: function () {
          this.__initialize();

      },

      __initialize: function () {
          this._socketListeners = this._sockListeners || [];
          if (this.socket_events && _.size(this.socket_events) > 0) {
              this.delegateSocketEvents(this.socket_events);
          }
      },

      delegateSocketEvents: function (events) {
          for (var key in events) {
              var method = events[key];
              if (!_.isFunction(method)) {
                  method = this[events[key]];
              }

              if (!method) {
                  throw new Error('Method "' + events[key] + '" does not exist');
              }

              method = _.bind(method, this);
              _.bindAll(this, method);
              _socketListeners.push(window.app.socket.on(key, method));
          };
      },

      remove: function () {
        _.each(this._socketListeners, function (listener) {
              listener.remove();
        });
        return oldremove.apply(this, arguments);
      }
  });

});
