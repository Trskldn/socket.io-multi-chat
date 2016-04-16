define(['Backbone',
	'./RoomsListView',
	'./ChatRoomView',
	// './MessagesView',
	// './UsersView',
	'text!templates/MainView.html'],
	function(Backbone, RoomsListView, ChatRoomView, MainViewTemplate) {

		var MainView = Backbone.Layout.extend({
			template: MainViewTemplate,
        views : {
            ".rooms" : new RoomsListView(),
						".chatroom": new ChatRoomView()
        }
		});


		return MainView;
});
