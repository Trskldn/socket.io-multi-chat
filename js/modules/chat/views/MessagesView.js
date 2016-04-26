define([
'backbone', 
"text!./../templates/MessagesView.html", 
'./MessagesItemView',
'core/common'], 
function(Backbone, MessagesViewTmpl, MessagesItemView, Common) {
	var MessagesView = Common.CollectionView.extend({
		template: MessagesViewTmpl,

		modelView: MessagesItemView,

		childContainer: '.panel-body',

		events: {
			'click button': '_onSendClick'
		},

		_onSendClick: function(e) {
			console.log(e, this.collection); 
			e && e.preventDefault();

			var newmess = this.collection.create({text: 'new message', threadId: 1 }, { wait: true} );
		}
	});
	return MessagesView;
});