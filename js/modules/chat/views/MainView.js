define(['Backbone',
	'./RoomsListView',
	// './MessagesView',
	// './UsersView',
	'text!./../templates/MainView.html',
	'core/common'],
	function(Backbone, RoomsListView, MainViewTemplate, Common) {

		var MainView = Common.Layout.extend({
			
			template: MainViewTemplate,
	        
	        regions : {
    	        rooms: ".rooms",
				messages: ".messages",
				users: ".users"
        	}
		});

		return MainView;
});
