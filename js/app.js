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
], function( Backbone, Route, io, Common, UserModel, RoomsCollection) {

	var App = function () {
		this._started = false;
		this.initialize();
	};

	_.extend(App.prototype, Backbone.Events, {
		initialize: function () {
			this.main = new Common.Region({el: "#main"});
			this.socket = io('http://localhost:8080');
			// this.user = new UserModel({url: "/me"});
			// this.db = {
			// 	rooms: new RoomsCollection()
			// }
		},
	
		start: function() {
			if (this._started) return;
			this.route = new Route({mainRegion: this.main});
			Backbone.history.start({ pushState: false });
			console.log('applications start');
			this._started = true;
		}
	});

	return new App();
});
