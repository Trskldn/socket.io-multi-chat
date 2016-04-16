define(['Backbone', "text!templates/UsersView.html"], function(Backbone, UsersViewTmpl) {
	var UsersView =  Backbone.Layout.extend({
		template: UsersViewTmpl
	});

	return UsersView;
});
