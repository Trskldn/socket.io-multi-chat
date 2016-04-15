define(
	['Backbone',
	'socket.io',
	'common/backbone.model.io.patch',
	'Layoutmanager',
], function( Backbone, io ) {


	var App = function () {
		this.initialize();
		this.started = false;
	};
	_.extend(App.prototype, Backbone.Events, {
		initialize: function () {
			Backbone.Layout.configure({
				fetchTemplate: function(path) {
					 return _.template(path);
				}
			});

			this.socket = io('http://localhost');
		},

		start: function() {
			if (this.started) return;
			console.log('applications start');
			this.started = true;
		}
	});

	return new App();
});
