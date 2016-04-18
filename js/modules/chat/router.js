define([
'Backbone', 
'./views/MainView', 
'./views/RoomsListView', 
'./views/ChatRoomView',
'./collections/Rooms'], 
function(Backbone, MainView, RoomsListView, ChatRoomView, RoomsCollection ) {
	var Router = Backbone.Router.extend({
		routes: {
			'chat': 	'showRoom',
			'chat/:id': 'showRoom'
		},
		
		initialize: function(options) {
			this.options = options;
		},

		showRoom: function(id) {
			console.log('showRoom');
			var  roomsList = new RoomsCollection();
			var self = this;

			roomsList.fetch({success: function(data) {
				var mainView = new MainView();
	    	    var roomsListView =  new RoomsListView({collection: roomsList});
				var chatRoomView = new ChatRoomView();			

				self.options.app.mainRegion.show(mainView);
				// mainView.render();
				mainView.roomsView.show(roomsListView);
				mainView.chatroomView.show(chatRoomView);

			}});
		}
	});

	return  Router;
});