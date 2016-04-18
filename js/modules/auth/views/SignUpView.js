define(['Backbone', "text!templates/SignUpView.html", 'core/common'], function(Backbone, SignUpViewTmpl, Common) {
	var SignUpView =  Common.ModelView.extend({
		template: SignUpViewTmpl
	});

	return SignUpView;
});
