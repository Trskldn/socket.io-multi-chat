define([
'backbone', 
"text!./../templates/UsersView.html", 
'./UsersItemView',
'core/common'], 
function(Backbone, UsersViewTmpl, UsersItemView, Common) {
	var UsersView =  Common.CollectionView.extend({
		template: UsersViewTmpl,
		modelView: UsersItemView,
		childViewContainer: '.panel-body',
	});

	return UsersView;
});
