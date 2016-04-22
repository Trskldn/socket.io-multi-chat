define([
'backbone'
], 
function(Backbone) {

	var Router = Backbone.Router.extend({
		routes: {
			'chat': 	'showRoom',
			'chat/:id': 'showRoom'
		},
		
		initialize: function(options) {
			this.options = options;
			this.app = options.app;
		},

		showRoom: function(id) {
			this.app.showRooms(id);
		}
	});

	return  Router;
});