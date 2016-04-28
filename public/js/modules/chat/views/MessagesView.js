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
			var $input = this.$el.find('input'),
				text = $input.val();
			
			e && e.preventDefault();
			if (text == '') return;
			$input.val('');
			app.vent.trigger('message:send', text);
		}
	});
	return MessagesView;
});