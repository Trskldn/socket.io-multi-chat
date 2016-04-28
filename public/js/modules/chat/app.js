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
			// this.listenTo(this.roomsList, 'selected', this.selectRoom, this);
		},	
		
		createLayout: function() {
			if (!$('#chat-layout').length) {
				this.mainView = new MainView({roomsList: this.roomsList});
				this.listenToOnce(this.mainView, 'remove', this.close, this);
				this.region.show(this.mainView); 
			}
		},

		showRooms: function(roomId) {
			var self = this;
			var room;


			if (!roomId) {
				room = this.roomsList.getSelected() || this.roomsList.at(0);
				roomId = room.get('id');
				Backbone.history.navigate(room.url(), {replace: true});
			} else {
				room = this.roomsList.get(roomId) || this.roomsList.at(0);
			}
			if(room)  this.roomsList.setSelected(roomId);

			this.mainView.showMessageAndUsersView();
		},

		// selectRoom: function(id) {
		// 	Backbone.history.navigate('#chat/'+id);
		// },

		start: function() {

		},

		close: function() {
			this.mainView = null;
		}
	});

	return ChatApp;
});