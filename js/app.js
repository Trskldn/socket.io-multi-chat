define([
'Backbone',
'router',
'socket.io',
'core/common',
// 'models/user',
// 'collections/rooms',
'core/backone.socketio.sync'
//'common/backbone.model.io.patch',
//	'Layoutmanager'
], function( Backbone, Route, io, Common, NavHeaderView) {

	var App = function () {
		this._started = false;
		this.initialize();
	};

	_.extend(App.prototype, Backbone.Events, {
		initialize: function () {
			this.mainRegion = new Common.Region({el: "#main"});
			this.navRegion = new Common.Region({el: "#nav"});
			this.socket = io('http://localhost:8080');
			// this.user = new UserModel({url: "/me"});
			// this.db = {
			// 	rooms: new RoomsCollection()
			// }
		},
	
		start: function() {
			if (this._started) return;
			this.route = new Route({region: this.mainRegion});
			Backbone.history.start({ pushState: false });
			console.log('applications start');
			this._started = true;
		}
	});

	return new App();
});
