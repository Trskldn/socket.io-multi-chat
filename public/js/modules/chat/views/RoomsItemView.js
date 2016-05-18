define(['backbone', 
	"text!./../templates/RoomsItemView.html",
	"core/common"
	],	function(Backbone, RoomsItemViewTmpl, Common) {

		var RoomsItemView =  Common.ModelView.extend({
			tagName: 'a',

			className: function() {
				return 'list-group-item ' + (this.model.get('selected') ? 'active' : ''); 
			},

			template: RoomsItemViewTmpl,

			events: {
				'click': '_onRoomClick'
			},

			initialize: function() {
				this.inherited('initialize', arguments);
				this.listenTo(this.model, 'change:selected', this._onSelectedChange, this);
				this.listenTo(this.model, 'change', this.render, this);
			},

			// _onNewMessage:function() {
			// 	console.log(this);
			// },

			_onSelectedChange: function() {
				this.$el.toggleClass('active', this.model.get('selected'));
				if (this.model.get('selected')) {
					this.model.set('unreadMsgCnt', 0);
				}
			},

			attributes: function() { 
				return {href: '#'+this.model.url()};
			},

			_onRoomClick: function(evt) {
				// evt.preventDefault();
			}
		});

		return RoomsItemView;
});