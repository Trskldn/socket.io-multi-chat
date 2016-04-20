define([
'Backbone', 
'./router',
'./views/MainView', 
'./views/RoomsListView', 
'./views/MessagesView', 
'./views/UsersView',
'./collections/Rooms'
], function(Backbone, Router, MainView, RoomsListView, MessagesView, UsersView, RoomsCollection) {	
	var ChatApp = function(options) {
		this.region = options.region;
		this.initialize();


		// this.vent = _.extend({}, Backbone.Events);
		this.router = new Router({app: this});
		Backbone.history.loadUrl();
	};

	_.extend(ChatApp.prototype, Backbone.Events, {
		initialize: function() {
			this.roomsList = new RoomsCollection();
		},
		
		showRooms: function(roomId) {
			var self = this;

			this.roomsList.fetch({success: function(roomsList) {
				var room;

				if (!roomId) {
					room = roomsList.at(0);
					roomId = room.get('id');
					Backbone.history.navigate(room.url(), {replace: true});
				} else {
					room = roomsList.get(roomId) || roomsList.at(0);
				}

	    	    var roomsListView =  new RoomsListView({collection: roomsList});
				var mainView = new MainView();
				var messagesView = new MessagesView({collection: room.get('messages')}); 
				var usersView = new UsersView({collection: room.get('users')});

				self.region.show(mainView);
				mainView.getRegion('rooms').show(roomsListView);
		
				mainView.getRegion('messages').show(messagesView);
				mainView.getRegion('users').show(usersView);
				roomsList.setSelected(roomId);

			}});
		},

		start: function() {

		},

		close: function() {

		}
	});

	return ChatApp;
});