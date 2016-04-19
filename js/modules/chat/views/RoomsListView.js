define(['Backbone', 
	"text!./../templates/RoomsListView.html",
	"./RoomsItemView",
	"core/common"
	],	function(Backbone, RoomsViewTmpl, RoomsItemView, Common) {

		var RoomsListView =  Common.CollectionView.extend({
			
			template: RoomsViewTmpl,
			
			modelView: RoomsItemView, 

			childViewContainer: '.teams-list',

			initialize: function() {
				Common.CollectionView.prototype.initialize.apply(this, arguments);
				// window.col = this.collection = new RoomsCollection();

			// 	this.listenTo(this.collection, 'add', this.addRoom);
			// 	this.listenTo(this.collection, 'remove', this.removeRoom);
			// 	this.listenTo(this.collection, 'reset', this.render);
			// 	this.collection.fetch();
			},

			// addRoom: function(data) {
			// 	console.log("add", data);
			// 	var newRoomView = new RoomsItemView({model: data});
			// 	newRoomView.render().$el.appendTo(this.el);
			// 	// this.el.append(newRoomView.el);

			// },

			// removeRoom: function(model) {
			// 	console.log('remove');
			// 	model.destroy();
			// },

			// render: function() {
			// 	console.log('render',arguments);
			// 	Common.CollectionView.prototype.render.apply(this, arguments);
			// }
		});

		return RoomsListView;
});