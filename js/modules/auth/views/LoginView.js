define(['Backbone', "text!templates/LoginView.html", "core/common"], function(Backbone, LoginViewTmpl, Common) {
	var LoginView =  Common.ModelView.extend({
		template: LoginViewTmpl
	});

	return LoginView;
});
