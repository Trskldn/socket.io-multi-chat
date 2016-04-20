define(['Backbone', './../models/Room'], function(Backbone, RoomModel) {

	var Rooms = Backbone.Collection.extend({
		url: "/contacts",
		model: RoomModel,
		currentSelected: null,

		parse: function(data) {
			_.each(data.data,function(room) {
				room.messages = new Backbone.Collection(room.messages)
				room.users = new Backbone.Collection(room.users)
			});
			return data.data;
		},

		setSelected: function(id) {
			var model = this.get(id),
				oldSelect;
			
			if (this.currentSelected && (oldSelect = this.get(this.currentSelected))) {
				oldSelect.unselect();
			}
			model.select();
			this.currentSelected = id;
		}
	});

	return Rooms;
});
