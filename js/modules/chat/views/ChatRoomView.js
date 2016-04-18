define([
'Backbone', 
"text!templates/ChatRoomView.html", 
'./MessagesView', 
'./UsersView',
'core/common'],
function(Backbone, ChatRoomViewTmpl, MessagesView, UsersView, Common) {
	var ChatRoomView =  Common.Layout.extend({
		template: ChatRoomViewTmpl,
	    regions: {
    		".messages" : 'messagesView',
     		".users" : 'usersView'
    		// ".messages" : new MessagesView(),
     	// 	".users" : new UsersView()
    	}
	});
	return ChatRoomView;
});
