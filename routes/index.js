module.exports = function(app) {
	require('./auth')(app);
	require('./chatio')(app);
	require('./homepage')(app);
};