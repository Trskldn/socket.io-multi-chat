define(['backbone', 
       "text!./../templates/UsersItemView.html",
       "core/common"
],	function(Backbone, UsersItemTmpl, Common) {

    var UsersItem =  Common.ModelView.extend({
	template: UsersItemTmpl
    });

    return UsersItem;
});
