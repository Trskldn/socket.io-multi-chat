define([
'Backbone',
// 'modules/chat/router'
], function( Backbone ) {

	return Backbone.Router.extend({
		routes: {
			 '': 'defaultRoute',
			 // 'home': 'testhomePage',
 			// '*mod/*rest': 'loadModule',
			'*module(/*hash)': 'loadModule'		
		},

		initialize: function (options) {
			// require(['views/MainView'], function(MainView) {
			// 	window.MainView = MainView;
			// 	new MainView({el: '#main'}).render();
			// });
			// this.currentApp = void 0;
			this._modules = {};
			this.options = options;
		},

		testhomePage: function() {
			console.log('home router from main router')
			return false;
		},

		defaultRoute: function() {
	    	Backbone.history.navigate("/home", true);
		},

		loadModule: function(moduleName, hash) {
			console.log('load ', moduleName);
			var self = this;

			require(['modules/'+ moduleName+'/app'], function(Module) {
				if (!self._modules[moduleName]) {
					console.log(moduleName, 'loaded');
					var module = new Module({mainRegion: self.options.mainRegion});
					module.start();
					self._modules[moduleName] = module;
				} else {
					console.log(moduleName,' already loaded');
				}
				// if (self.currentApp instanceof app) {

				// }
			},function(error) {
				console.log('error loaded ',arguments);
		    	Backbone.history.navigate("/");
			});
			// return false;
		}
	});
});
