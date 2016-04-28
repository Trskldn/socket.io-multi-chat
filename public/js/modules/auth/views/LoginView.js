define(['backbone', "text!./../templates/LoginView.html", "core/common"], function(Backbone, LoginViewTmpl, Common) {
	var LoginView =  Common.ModelView.extend({
		template: LoginViewTmpl,

		events: {
			'click .btn-signin': '_onSubmit',
			'submit form': '_onSubmit'
		},

		_onSubmit: function(e) {
			var username = this.$el.find('input[name=username]').val();
			var password = this.$el.find('input[name=password]').val();
			e && e.preventDefault();
			console.log('_onSubmit <click></click>', username, password);
					
		}
	});

	return LoginView;
});
