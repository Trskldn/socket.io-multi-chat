define(['Backbone', 'models/Room'], function(Backbone, RoomModel) {

	var Rooms = Backbone.Collection.extend({
		url: "/contacts",
		model: RoomModel,

		parse: function(data) {
			return data.data;
		}
	});

	return Rooms;
});
