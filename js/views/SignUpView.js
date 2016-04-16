define(['Backbone', "text!templates/SignUpView.html"], function(Backbone, SignUpViewTmpl) {
	var SignUpView =  Backbone.Layout.extend({
		template: SignUpViewTmpl
	});

	return SignUpView;
});
