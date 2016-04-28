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
		sync: Backbone.IoSync,
		twoWaySync:true,
		socket: app.socket,

		initialize: function() {
			Backbone.Collection.prototype.initialize.apply(this, arguments);
			this.socket.on('create', _.bind(this._onCreate, this));
			this.socket.on('delete', _.bind(this._onDelete, this));
		},

		_onCreate: function() {

		},

		_onDelete: function() {

		},
		
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
