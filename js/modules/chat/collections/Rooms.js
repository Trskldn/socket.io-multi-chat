define([
'backbone', 
'./../models/Room',
'./Messages',
'./Users'
], 

function(Backbone, RoomModel, Messages, Users) {

	var Rooms = Backbone.Collection.extend({
		url: "/rooms",
		model: RoomModel,
		currentSelected: null,

		parse: function(data) {
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
			this.trigger('selected', id);
		},

		getSelected: function() {
			return this.get(this.currentSelected);
		}
	});

	return Rooms;
});
