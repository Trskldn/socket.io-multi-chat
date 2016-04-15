define(['Backbone', "text!templates/MessagesView.html"], function(Backbone, MessagesViewTmpl) {
	var MessageView =  Backbone.Layout.extend({
		template: MessagesViewTmpl
	});
	return MessageView;
});
