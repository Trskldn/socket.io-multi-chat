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
		this.initialize();
	};

	_.extend(App.prototype, Backbone.Events, {
		initialize: function () {
			this.mainRegion = new Common.Region({el: "#main"});
			this.navRegion = new Common.Region({el: "#nav"});
			this.socket = io('http://localhost:8080');
			this.vent = _.extend({}, Backbone.Events);
			this.session = session;
			this.listenTo(this.session, 'signin signout', this._onAuthChange, this);
		},
	
		start: function() {
			if (this._started) return;
			this.route = new Route({region: this.mainRegion});
			Backbone.history.start({ pushState: false });
			console.log('applications start');
			this._started = true;
		},

		_onAuthChange: function() {
			console.log('_onAuthChange');
			app.socket.disconnect();
			app.socket.connect();
			// this.socket.reconnect();
		}
	});

	return App;
});
