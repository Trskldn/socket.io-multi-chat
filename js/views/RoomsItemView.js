define(['Backbone', 
	"text!templates/RoomsItemView.html"
	],	function(Backbone, RoomsItemViewTmpl) {

		var RoomsItemView =  Backbone.Layout.extend({
			template: RoomsItemViewTmpl
		});

		return RoomsItemView;
});