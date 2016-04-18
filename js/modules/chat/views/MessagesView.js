define(['Backbone', "text!templates/MessagesView.html", 'core/common'], function(Backbone, MessagesViewTmpl, Common) {
	var MessagesView = Common.CollectionView.extend({
		template: MessagesViewTmpl
	});
	return MessagesView;
});
