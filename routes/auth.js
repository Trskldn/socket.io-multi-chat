var passport = require('passport');

module.exports = function(app) {

	app.get('/login(/:id)?', function(req, res) {
		if (req.user) {
			res.json({isLogged:true, id: req.user.id, username: req.user.username});
		} else {
			res.json({isLogged: false});
		}
	});

	app.post('/login', 
		passport.authenticate('local'), 
		function(req, res) {
			res.json({isLogged:true, id: req.user.id, username: req.user.username});
		});

	app.put('/login(/:id)?', 
		passport.authenticate('local'), 
		function(req, res) {
			console.log("req.user", req.user);
			res.json({isLogged:true, id: req.user.id, username: req.user.username});
		});

	app.delete('/login/:id', function(req, res) {
		req.logOut();
		res.json({isLogged:false});
	});
};