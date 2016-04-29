var passport = require('passport'),
	LocalStrategy = require('passport-local');


passport.use(new LocalStrategy(
	function(username, pasword, done) {
		var user = {
			password: 'test',
			username: 'test',
			email: 'test@test.com',
			id: 1
		};
		if (username == 'test') return done(null, user);
		else done(null, false);
	}
));

passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});
 
 
passport.deserializeUser(function (data, done) {
    try {
        done(null, JSON.parse(data));
    } catch (e) {
        done(err);
    }
});
 
module.exports = function(app) {
 
};