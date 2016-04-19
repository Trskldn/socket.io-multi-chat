define([
'Backbone', 
"text!./../templates/MessagesView.html", 
'./MessagesItemView',
'core/common'], 
function(Backbone, MessagesViewTmpl, MessagesItemView, Common) {
	var MessagesView = Common.CollectionView.extend({
		template: MessagesViewTmpl,
		modelView: MessagesItemView,
		childViewContainer: '.panel-body',

	});
	return MessagesView;
});
