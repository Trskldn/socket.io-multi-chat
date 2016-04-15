define(['Backbone', 
	'./RoomsView', 
	'./MessagesView', 
	'./UsersView',
	'text!templates/MainView.html'], 
	function(Backbone, RoomsView, MessagesView, UsersView, MainViewTemplate) {

		var MainView = Backbone.Layout.extend({
			template: MainViewTemplate,
	        views : {
	            ".rooms" : new RoomsView(),
	            ".messages" : new MessagesView(),
	            ".users" : new UsersView()
	        }
		});


		return MainView;
});