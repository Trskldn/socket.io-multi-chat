define(['Backbone', 
	"text!./../templates/UsersItemView.html",
	"core/common"
	],	function(Backbone, UsersItemTmpl, Common) {

		var UsersItem =  Common.ModelView.extend({
			template: UsersItemTmpl,

			events: {
				'click a': '_onRoomClick'
			},

			initialize: function() {
				// this.listenTo(this.model, 'destroy', _.bind(this.remove,this));
			},

			_onRoomClick: function(evt) {
				evt.preventDefault();
				// console.log(arguments);
				// this.model.destroy();
				this.trigger('click', this.model);
			}
		});

		return UsersItem;
});