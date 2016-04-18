define(['Backbone'], function(Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'rooms': 	'showRoom',
			'rooms/:id': 'showRoom'
		},
		
		initialize: function(options) {
			this.options = options;
		},

		showRoom: function(id) {
			
		}
	});

	return  Router;
});