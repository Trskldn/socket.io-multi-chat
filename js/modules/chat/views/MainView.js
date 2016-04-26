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
        	},

        	render: function() {
        		Common.Layout.prototype.render.apply(this, arguments);	
 				this.getRegion('rooms').show(this.roomsListView);
        	},

        	showMessageAndUsers: function() {
				this.messagesView = new MessagesView({collection: this.options.roomsList.getSelected().messages}); 
				this.usersView = new UsersView({collection: this.options.roomsList.getSelected().users});
				this.getRegion('messages').show(this.messagesView);
				this.getRegion('users').show(this.usersView);
        	},
   
        	showMessagesForRoom: function(id) {
        		
        	}
		});

		return MainView;
});
