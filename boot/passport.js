var passport = require('passport'),
	LocalStrategy = require('passport-local');

module.exports = function(app) {

	passport.use(new LocalStrategy(
		function(username, pasword, done) {
			var user = {
				password: 'test',
				username: 'test',
				email: 'test@test.com',
				id: 1
			};
			return done(null, user);
		}
	));

};