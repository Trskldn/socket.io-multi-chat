define(['backbone', 
	"text!./../templates/MessagesItemView.html",
	"core/common"
	],	function(Backbone, MessagesItemTmpl, Common) {

		var MessagesItem =  Common.ModelView.extend({
			template: MessagesItemTmpl
		});

		return MessagesItem;
});