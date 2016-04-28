define([
    'backbone',
    'core/fncombiner'
], 
function(Backbone, fncombiner) {
 	var firstRun = true;

    Backbone.history.loadUrl = function(fragment) {
    	this.trigger('routechange');
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.reduce(this.handlers, function(memo, handler) {
		        if (handler.route.test(fragment)) {
		          handler.callback(fragment);
		          return true;
		        }
      }, false);
    };

 	var bindRoutesToContext = function(routes, cntx) {
		return _.map(_.isArray(routes) ? routes : [routes], function(fnn) {  
					if (_.isString(fnn)) {
						if(!_.isFunction(cntx[fnn])) throw new Error(fnn+' dosnt found');
						return _.bind(cntx[fnn], cntx);
					} else if (_.isFunction(fnn)) {
						return _.bind(fnn, cntx);
					} else if (_.isArray(fnn)) {
						return bindRoutesToContext(fnn, cntx);
					}
				});
 	};


	return Backbone.Router.extend({
		base: 'chat',

		_firstMatch: true,

		routes: {
			'chat(/*any)': 'preload',
			// 'router': [callback, [sometime1, sometime2], lastcallback]
			'chat(/:id)': ['createLayout', 'loadRooms', 'showRoom']
		},
	
		constructor: function() {
			var route, routes = _.keys(this.routes);

			while ((route = routes.pop()) != null) {
				if (_.isArray(this.routes[route])) {
					this.routes[route] = fncombiner(bindRoutesToContext(this.routes[route], this));
				}
			}

			Backbone.Router.apply(this, arguments);
		},

		initialize: function(options) {
			this.options = options;
			this.app = options.app;
			this._defersToWait = [];
			this.listenTo(Backbone.history, 'routechange', this._onRouteChange, this);
			Backbone.Router.prototype.initialize.apply(this, arguments);
		},
    	
    	createLayout: function() {
    		console.log('createLayout');
    		this.app.createLayout();
    	},

    	loadRooms: function() {
    		console.log('loadRooms');
    		if (!this.app.roomsList.length) return this.app.roomsList.fetch();
    	},

    	preload: function() {
    		console.log('preload');
    	},

    	execute: function(/*callback, args, name*/) {
    		var self = this,
    			args = arguments;


    		console.log('execute ', arguments);
    		if (this._firstMatch && this.onEnter) {
    			var onEnter = fncombiner(bindRoutesToContext(this.onEnter, this));
    			this._defersToWait.push(onEnter());
	    		this._firstMatch = false;
    		}

    		$.when.apply($, this._defersToWait).done(function() {
    			Backbone.Router.prototype.execute.apply(self, args);
    		});
    	},

    	_onRouteChange: function() {
    		console.log('_onRouteChange');
    	},

		onEnter: function() {
		},

		onExit: function() {
			this._firstMatch = true;
		},

		showRoom: function(id) {
			this.app.showRooms(id);
		}
	});
});