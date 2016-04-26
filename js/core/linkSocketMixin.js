define([], function() {
	return {
		link: function(actions) {
			var self = this;
			actions = _.isArray(actions) ? actions : [actions];

			_.each(actions, function(action) {
				var socketEvent = (_.result(self, 'url') +':'+action).replace(/\//g, ':');
				console.log(socketEvent);
				app.socket.on(socketEvent, _.bind(self[action],self));
			});
		}
	};
});