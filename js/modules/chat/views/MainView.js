define([
'backbone',
'./RoomsListView',
'./MessagesView', 
'./UsersView',
'text!./../templates/MainView.html',
'core/common'
],
	function(Backbone, RoomsListView, MessagesView, UsersView, MainViewTemplate, Common) {

		var MainView = Common.Layout.extend({
			
			template: MainViewTemplate,
	        
	        regions : {
    	        rooms: ".rooms",
				messages: ".messages",
				users: ".users"
        	},

        	initialize: function(options) {
        		this.options = options;
        		Common.Layout.prototype.initialize.apply(this, arguments);	
	    	    this.roomsListView =  new RoomsListView({collection: this.options.roomsList});
				// this.messagesView = new MessagesView({collection: options.roomsList.getCurrentRoom().get('messages')}); 
				// this.usersView = new UsersView({collection: options.roomsList.getCurrentRoom().get('users')});
        	},

        	render: function() {
        		Common.Layout.prototype.render.apply(this, arguments);	
 				this.getRegion('rooms').show(this.roomsListView);
				// this.getRegion('messages').show(this.messagesView);
				// this.getRegion('users').show(this.usersView);
        	},

        	showMessagesForRoom: function(id) {
        		
        	}
		});

		return MainView;
});
