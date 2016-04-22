define([
'backbone',
'shared/views/NavHeaderView'
// 'modules/chat/router'
], function( Backbone, NavHeaderView ) {

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
			this._currentModule = '';
			this._modules = {};
			this.options = options;
			this.renderHeader();
		},

		testhomePage: function() {
			return false;
		},

		defaultRoute: function() {
	    	Backbone.history.navigate("/home", true);
		},

		loadModule: function(moduleName, hash) {
			console.log('loading module:', moduleName);
			var self = this;

			require(['modules/'+ moduleName+'/app'], function(Module) {
				// if (self._currentModule != moduleName  &&
				// 	self._modules[self._currentModule] &&
				// 	self._modules[self._currentModule].close) {
				// 		self._modules[self._currentModule].close();
				// }
				if (!self._modules[moduleName]) {
					console.log(moduleName, 'loaded');
					var module = new Module({region: self.options.region});
					module.start();
					self._modules[moduleName] = module;
				} else {
					console.log(moduleName,' already loaded');
				}
				self._currentModule = moduleName;
				// if (self.currentApp instanceof app) {

				// }
			},function(error) {
				console.log('error loaded ',arguments);
		    	Backbone.history.navigate("/");
			});
			// return false;
		},

		renderHeader: function() {
			var navHeaderView = new NavHeaderView();
			app.navRegion.show(navHeaderView);
		}
	});
});
