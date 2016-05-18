define([
'backbone',
'router',
'socket.io',
'core/common',
'core/MessageStore',
'core/session',
'core/backone.socketio.sync'
], function( Backbone, Route, io, Common, MessageStore, session) {

	var App = function () {
		this._started = false;
		this.initialize()
	};

	_.extend(App.prototype, Backbone.Events, {
		initialize: function () {
			this.mainRegion = new Common.Region({el: "#main"});
			this.navRegion = new Common.Region({el: "#nav"});
			this.socket = io();
			this.vent = _.extend({}, Backbone.Events);
			this.session = session;
		},
	
		start: function() {
			if (this._started) return;
			this.route = new Route({region: this.mainRegion});
			Backbone.history.start({ pushState: false });
			this._started = true;
		}
	});

	return App;
});
