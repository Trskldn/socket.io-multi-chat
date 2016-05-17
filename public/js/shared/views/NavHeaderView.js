define([
    'backbone',
    'core/common',
    'text!./../templates/NavHeaderView.html'
  ],
  function(Backbone, Common, NavHeaderViewTmpl) {
    var NavHeaderView = Common.ModelView.extend({

      template: NavHeaderViewTmpl,

      tagName: 'div',

      className: 'container',

      initialize: function() {
        Common.ModelView.prototype.initialize.apply(this, arguments);
        this.listenTo(Backbone.history, 'route', this._changeRoute);
        this.listenTo(app.session, 'change:isLogged', this._onAuthChange);
      },

      _onAuthChange: function() {
        app.session
        this.$el.find('a[data-auth]').each(function(i, el) {
          console.log();
          var $el = $(el);

          $el.toggleClass('hide', app.session.get('isLogged') != $el.data('auth'));
        });
      },

      render: function() {
        this.inherited('render', arguments);;
        this._onAuthChange();
      },

      _changeRoute: function() {
        this.highlightMenuItem();
      },

      highlightMenuItem: function() {
        this.$el.find('.navbar-nav a').each(function(i, el) {
          if (!('#' + Backbone.history.fragment).indexOf(el.getAttribute('href')) && el.getAttribute('href').length > 1) {
            $(el.parentNode).toggleClass('active', true);
          } else {
            $(el.parentNode).removeClass('active');
          }
        });
      }
    });

    return NavHeaderView;
  });