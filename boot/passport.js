var passport = require('passport'),
	LocalStrategy = require('passport-local');

var user = {
	password: 'test',
	username: 'test',
	email: 'test@test.com',
	id: 1
};

passport.use(new LocalStrategy(
	function(username, pasword, done) {
	    if (username == 'test') return done(null, user);
	    else done(null, false);
	}
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});
 
 
passport.deserializeUser(function (data, done) {
    return done(null, user);
});
 
module.exports = function(app) {
 
};
