define([
'Backbone', 
'./views/MainView', 
'./views/RoomsListView', 
'./views/MessagesView', 
'./views/UsersView',
'./collections/Rooms'], 
function(Backbone, MainView, RoomsListView, MessagesView, UsersView, RoomsCollection ) {
	var mainView;

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
	    	    var roomsListView =  new RoomsListView({collection: roomsList});
				mainView = new MainView();
				// var messagesView = new MessagesView(); 
				// var usersView = new UsersView();

				self.listenTo(roomsListView, 'item:click', self._onRoomClick, self);

				self.options.app.region.show(mainView);
				mainView.getRegion('rooms').show(roomsListView);
				// mainView.getRegion('messages').show(messagesView);
				// mainView.getRegion('users').show(UsersView);

			}});
		}, 

		_onRoomClick: function(view, model) {
			console.log('onRoomClick', arguments);
			var messagesView = new MessagesView({collection: model.get('messages')}); 
			var usersView = new UsersView({collection: model.get('users')});

			mainView.getRegion('messages').show(messagesView);
			mainView.getRegion('users').show(usersView);
		}
	});

	return  Router;
});