define(['Backbone', './views/HomePageView'], function(Backbone, HomePageView) {
	var Router = Backbone.Router.extend({
		routes: {
			'home': 'homePage'
		},

		initialize: function(options) {
			this.options = options;
		},

		homePage: function() {
			console.log('homePage router from home app')
			var v = new HomePageView();
			this.options.app.mainRegion.show(v);
		}
	});

	return Router;
});