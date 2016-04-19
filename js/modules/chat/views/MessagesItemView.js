define(['Backbone', 
	"text!./../templates/MessagesItemView.html",
	"core/common"
	],	function(Backbone, MessagesItemTmpl, Common) {

		var MessagesItem =  Common.ModelView.extend({
			template: MessagesItemTmpl,

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

		return MessagesItem;
});