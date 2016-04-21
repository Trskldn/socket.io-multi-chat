define([
'Backbone', 
'core/common', 
'text!./../templates/NavHeaderView.html'],
function (Backbone, Common, NavHeaderViewTmpl) {
  var NavHeaderView = Common.ModelView.extend({
  	
  	template: NavHeaderViewTmpl,
  	
  	tagName:'div',
  	
  	className: 'container',
  	
  	initialize: function() {
      Common.ModelView.prototype.initialize.apply(this, arguments);
	   	this.listenTo(Backbone.history,'route', this._changeRoute);
  	},

  	_changeRoute: function() {
			this.$el.find('.navbar-nav  a').each(function(i, el) {
				if (!('#'+Backbone.history.fragment).indexOf(el.getAttribute('href')) && el.getAttribute('href').length > 1){
					$(el.parentNode).toggleClass('active', true);
				} else {
					$(el.parentNode).removeClass('active');
				}
			});
  	}
  });
  
  return NavHeaderView;
});
