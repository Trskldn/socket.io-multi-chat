define(['Backbone', 
	"text!templates/RoomsView.html",
	"./RoomsItemView"
	],	function(Backbone, RoomsViewTmpl, RoomsItemView) {

		var RoomsView =  Backbone.Layout.extend({
			template: RoomsViewTmpl,
			initialize: function() {

			}
		});

		return RoomsView;
});