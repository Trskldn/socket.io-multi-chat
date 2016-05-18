define(['backbone', "text!./../templates/LoginView.html", "core/common"], function(Backbone, LoginViewTmpl, Common) {
	var LoginView = Common.ModelView.extend({
		template: LoginViewTmpl,

		events: {
			'click .btn-signin': '_onSubmit',
			'submit form': '_onSubmit'
		},

		_onSubmit: function(e) {
			var form = this.$el.find('form'),
				data = form.serializeJSON();

			this.$el.find('.error').text('');
			e && e.preventDefault();
			form[0].reset();
			app.socket.emit('login', data, function(data) {
				console.log(data);
				if (data.token) {
					localStorage.setItem('token', data.token);
					app.session.setUser(data.user);
					Backbone.history.navigate('chat', {
						trigger: true
					});
				}
				if (!data.success) {
					this.$el.find('.error').text(data.message);
				}
			}.bind(this));
			// app.session.save();
			// app.socket.disconnect();
			// setTimeout(function() {
			// 	app.socket.connect();
			// }, 10);


		}
	});

	return LoginView;
});