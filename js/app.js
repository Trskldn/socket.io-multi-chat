define(
	['Backbone',
	'router',
	'socket.io',
	'models/user',
	'collections/rooms',
	'core/backone.socketio.sync',
	//'common/backbone.model.io.patch',
	'Layoutmanager'
], function( Backbone, Route, io, UserModel, RoomsCollection ) {

	var App = function () {
		this._started = false;
		this.initialize();
	};

	_.extend(App.prototype, Backbone.Events, {
		initialize: function () {
			Backbone.Layout.configure({
				fetchTemplate: function(path) {
					 return _.template(path);
				}
			});
			this.socket = io('http://localhost:8080');
			this.user = new UserModel({url: "/me"});
			this.db = {
				rooms: new RoomsCollection()
			}
		},

		start: function() {
			if (this._started) return;
			this.route = new Route();
			Backbone.history.start({ pushState: true });
			console.log('applications start');
			this._started = true;
		}
	});

	return new App();
});
