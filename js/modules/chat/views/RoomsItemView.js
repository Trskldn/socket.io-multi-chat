define(['Backbone', 
	"text!templates/RoomsItemView.html",
	"core/common"
	],	function(Backbone, RoomsItemViewTmpl, Common) {

		var RoomsItemView =  Common.ModelView.extend({
			template: RoomsItemViewTmpl,

			events: {
				'click a': 'roomClick'
			},

			initialize: function() {
				this.listenTo(this.model, 'destroy', _.bind(this.remove,this));
			},

			roomClick: function() {
				console.log(arguments);
				this.model.destroy();
			}
		});

		return RoomsItemView;
});