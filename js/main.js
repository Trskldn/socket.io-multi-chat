require(
	['Backbone',
	'app',
	'router'],
	function(Backbone, App, Router) {

		var router = new Router();
		window.app =  App;

		app.start();
		Backbone.history.start({ pushState: true });
});
