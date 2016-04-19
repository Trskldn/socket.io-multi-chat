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
		this.listenTo(Backbone.history,'route', this._changeRoute);
  	},

  	_changeRoute: function() {
			console.log('fragment:',Backbone.history.fragment);	
			window.nav = this.$el.find('.navbar-nav  a');
  	}
  });
  
  return NavHeaderView;
});
