define(['Backbone', './router'], function(Backbone, Router) {	
	var homePageApp = function(options) {
		this.mainRegion = options.mainRegion;
		this.router = new Router({app: this});
		Backbone.history.loadUrl();
		
		// this.render();
	};
	_.extend(homePageApp.prototype, {
		initialize: function() {

		},
		
		start: function() {

		},

		close: function() {

		}
	});

	return homePageApp;
});