define(['Backbone', "text!./../templates/UsersView.html", 'core/common'], function(Backbone, UsersViewTmpl, Common) {
	var UsersView =  Common.CollectionView.extend({
		template: UsersViewTmpl
	});

	return UsersView;
});
