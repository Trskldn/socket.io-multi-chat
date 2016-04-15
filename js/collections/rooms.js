require(['Backbone', 'models/room'], function(Backbone, RoomModel) {

	var Rooms = Backbone.Collection.extend({
		model: RoomModel;
	});

	return Rooms;
});