define(['Backbone', 
	"text!templates/RoomsListView.html",
	"./RoomsItemView",
	"collections/Rooms",
	"core/common"
	],	function(Backbone, RoomsViewTmpl, RoomsItemView, RoomsCollection, Common) {

		var RoomsView =  Common.CollectionView.extend({
			
			template: RoomsViewTmpl,
			
			initialize: function() {
				window.col = this.collection = new RoomsCollection();

				this.listenTo(this.collection, 'add', this.addRoom);
				this.listenTo(this.collection, 'remove', this.removeRoom);
				this.listenTo(this.collection, 'reset', this.render);
				this.collection.fetch();
			},

			addRoom: function(data) {
				console.log("add", data);
				var newRoomView = new RoomsItemView({model: data});
				newRoomView.render().$el.appendTo(this.el);
				// this.el.append(newRoomView.el);

			},

			removeRoom: function(model) {
				console.log('remove');
				model.destroy();
			},

			render: function() {
				console.log('render',arguments);
				Backone.Layout.prototype.render.apply(this, arguments);
			}
		});

		return RoomsView;
});