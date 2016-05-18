define([
    'backbone',
    "text!./../templates/SignUpView.html",
    'core/common'
  ],
  function(Backbone, SignUpViewTmpl, Common) {
    var SignUpView = Common.ModelView.extend({
      template: SignUpViewTmpl,

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
        app.socket.emit('signup', data, function(res) {
          this.$el.find('.signin').toggleClass('has-error', !res.success);
          if (res.success) {
            app.session.setUser(res.user);
            localStorage.setItem('token', res.token);
            setTimeout(function() {
              Backbone.history.navigate('chat', {
                trigger: true
              });
            }, 10);
          } else {
            this.$el.find('.error').text(res.message);
          }
          // app.socket.emit('login', res);
        }.bind(this));
      }
    });

    return SignUpView;
  });