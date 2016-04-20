define(['Backbone', 
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
				Common.ModelView.prototype.initialize.apply(this, arguments);
				this.listenTo(this.model, 'change:selected', this._onSelectedChange, this);
			},

			_onSelectedChange: function() {
				this.$el.toggleClass('active', this.model.get('selected'));
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