define(['Backbone', "text!templates/LoginView.html"], function(Backbone, LoginViewTmpl) {
	var LoginView =  Backbone.Layout.extend({
		template: LoginViewTmpl
	});

	return LoginView;
});
