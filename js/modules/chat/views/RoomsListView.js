define(['Backbone', 
	"text!./../templates/RoomsListView.html",
	"./RoomsItemView",
	"core/common"
	],	function(Backbone, RoomsViewTmpl, RoomsItemView, Common) {

		var RoomsListView =  Common.CollectionView.extend({
			
			template: RoomsViewTmpl,
			
			modelView: RoomsItemView, 

			childViewContainer: '.teams-list'

		});

		return RoomsListView;
});