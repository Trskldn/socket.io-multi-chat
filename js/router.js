define(['Backbone'], function( Backbone ) {

	return Backbone.Router.extend({
		routes: {
			'': 'home'
		},

		home: function() {
			require(['views/MainView'], function(MainView) {
				new MainView({el: '#main'}).render();
			});
			// console.log('qwe', arguments, this);
		}
	});
});

