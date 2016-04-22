define([
'backbone', 
'./router',
'./views/MainView', 
'./collections/Rooms',
'backbone-fetch-cache'
], function(Backbone, Router, MainView, RoomsCollection) {	
	var ChatApp = function(options) {
		this.region = options.region;
		this.initialize();
		this.router = new Router({app: this});
		Backbone.history.loadUrl();
	};

	_.extend(ChatApp.prototype, Backbone.Events, {
		initialize: function() {
			this.roomsList = new RoomsCollection();
			this.listenTo(this.roomsList, 'selected', this.selectRoom, this);
			// this.roomsList.fetch().done(function(roomsList) {
			// 	roomsList.setSelected(roomId);
			// });
			window.roomsList  = this.roomsList;
		},	
		
		createLayout: function() {
			if (!this.mainView) {
				this.mainView = new MainView({roomsList: this.roomsList});
				this.listenToOnce(this.mainView, 'remove', this.close, this);
				this.region.show(this.mainView); 
			}
		},

		showRooms: function(roomId) {
			var self = this;
			this.createLayout();

				var room, mainView;

				// if (!roomId) {
				// 	room = roomsList.getSelected() || roomsList.at(0);
				// 	roomId = room.get('id');
				// 	Backbone.history.navigate(room.url(), {replace: true});
				// } else {
				// 	room = roomsList.get(roomId) || roomsList.at(0);
				// }
				// room && roomsList.setSelected(roomId);
			
			this.roomsList.fetch({/*cache: true,*/ success: function(roomsList) {
				var room, mainView;

				if (!roomId) {
					room = roomsList.getSelected() || roomsList.at(0);
					roomId = room.get('id');
					Backbone.history.navigate(room.url(), {replace: true});
				} else {
					room = roomsList.get(roomId) || roomsList.at(0);
				}
				roomsList.setSelected(roomId);
			}});
		},

		selectRoom: function(id) {
			Backbone.history.navigate('#chat/'+id);
		},

		start: function() {

		},

		close: function() {
			// console.log('Chat Module closed');
			this.mainView = null;
		}
	});

	return ChatApp;
});