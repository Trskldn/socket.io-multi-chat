define(['backbone', 
       "text!./../templates/MessagesItemView.html",
       "core/common"
],	function(Backbone, MessagesItemTmpl, Common) {

    var MessagesItem =  Common.ModelView.extend({
	className: 'media chat-item',

	tag: 'div',

	template: MessagesItemTmpl
    });

    return MessagesItem;
});
