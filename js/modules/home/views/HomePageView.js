define([
'backbone', 
'text!./../templates/HomePageView.html', 
'core/common'
], function(Backbone, HomePageTmpl, Common) {
	var view = Common.ModelView.extend({
		template: HomePageTmpl
	});
	return view;
});