define(['Backbone', './views/HomePageView'], function(Backbone, HomePageView) {
	var Router = Backbone.Router.extend({
		routes: {
			'home': 'homePage'
		},

		initialize: function(options) {
			this.options = options;
		},

		homePage: function() {
			var v = new HomePageView();
			this.options.app.region.show(v);
		}
	});

	return Router;
});