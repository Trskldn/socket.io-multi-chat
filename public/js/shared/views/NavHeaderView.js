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
        this.listenTo(Backbone.history, 'route', this.render, this);
        this.listenTo(app.session, 'change:isLogged', this.render, this);
      },

      onRender: function() {
        this.inherited('onRender', arguments);
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