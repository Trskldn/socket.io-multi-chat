define(['Backbone', "text!templates/ChatRoomView.html", './MessagesView', './UsersView'],
function(Backbone, ChatRoomViewTmpl, MessagesView, UsersView) {
	var ChatRoomView =  Backbone.Layout.extend({
		template: ChatRoomViewTmpl,
    views: {
      ".messages" : new MessagesView(),
      ".users" : new UsersView()
    }
	});
	return ChatRoomView;
});
