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
			'click button': '_onSendClick',
			'keydown input': '_onKeyDown'
		},

		initialize: function() {
			this.inherited('initialize', arguments);
			this.listenTo(this.collection, 'add', this._onMessageAdd, this);
		},

		_onMessageAdd: function() {
			var el = this.$el.find('.chat-item:last')[0];
			el && el.scrollIntoView();
		},

		_onKeyDown: function(e) {
			if (e && e.keyCode == 13) this._onSendClick(e);
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