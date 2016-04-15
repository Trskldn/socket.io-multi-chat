require(['Backbone'], function(Backbone) {

	var Message = Backbone.Model.extend({
		defaults:{
			text: '',
			date: new Date(),
			user: ''
		}
	});

	return Message;
});