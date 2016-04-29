module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {port: app.get('port') });
	});
};