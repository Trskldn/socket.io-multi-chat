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
    // done(null, JSON.stringify(user));
	console.log('serializeUser', user);

    done(null, user.id);

});
 
 
passport.deserializeUser(function (data, done) {
	console.log('deserializeUser', data);
	return done(null, user);
//     try {
//         done(null, JSON.parse(data));
//     } catch (e) {
//         done(err);
//     }
});
 
module.exports = function(app) {
 
};