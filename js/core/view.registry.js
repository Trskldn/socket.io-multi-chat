define(['Backbone'], function(Backbone) {
	var _registry = {};

	var OriginalView = Backbone.View; 

	var MyView = OriginalView.extend({
		initialize: function() {
			_registry[this.cid] = this;
			OriginalView.prototype.initialize.apply(this, arguments);
		},

		remove: function() {
			delete _registry[this.cid];
			return OriginalView.prototype.remove.apply(this, arguments);
		}
	});

	Backbone.View = MyView;

	return {
		registry: function() {
			return _.clone(_registry);
		}
	}
});