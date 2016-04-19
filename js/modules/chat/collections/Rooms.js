define(['Backbone', './../models/Room'], function(Backbone, RoomModel) {

	var Rooms = Backbone.Collection.extend({
		url: "/contacts",
		model: RoomModel,

		parse: function(data) {
			_.each(data.data,function(room) {
				room.messages = new Backbone.Collection(room.messages)
				room.users = new Backbone.Collection(room.users)
			});
			return data.data;
		}
	});

	return Rooms;
});
