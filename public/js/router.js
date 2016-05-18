define([
'shared/views/NavHeaderView'
], function( NavHeaderView ) {

	return Backbone.Router.extend({
		routes: {
			'': 'defaultRoute',
			'*module(/*hash)': 'loadModule'		
		},

		initialize: function (options) {
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
				if (!self._modules[moduleName]) {
					console.log(moduleName, 'loaded');
					var module = new Module({region: self.options.region});
					module.start();
					self._modules[moduleName] = module;
				} else {
					console.log(moduleName,' already loaded');
				}
				self._currentModule = moduleName;
			},function(error) {
				console.log('error loaded ',arguments);
				Backbone.history.navigate("/");
			});
		},

		renderHeader: function() {
			var navHeaderView = new NavHeaderView();
			app.navRegion.show(navHeaderView);
		}
	});
});
