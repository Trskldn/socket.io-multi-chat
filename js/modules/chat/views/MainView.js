define(['Backbone',
	'./RoomsListView',
	'./ChatRoomView',
	// './MessagesView',
	// './UsersView',
	'text!./../templates/MainView.html',
	'core/common'],
	function(Backbone, RoomsListView, ChatRoomView, MainViewTemplate, Common) {

		var MainView = Common.Layout.extend({
			
			template: MainViewTemplate,
	        
	        regions : {
    	        roomsView: ".rooms",
				chatroomView: ".chatroom"
    // 	        ".rooms" : new RoomsListView(),
				// ".chatroom": new ChatRoomView()
        	}


		});

		return MainView;
});
