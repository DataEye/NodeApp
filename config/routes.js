var jobs = require('../apps/jobs/routes/')

module.exports = function(app) {

	// dataeye招聘
	app.use('/jobs', jobs)

	app.get('/', function(req, res) {
  	res.redirect('http://www.dataeye.com/')
	})
}
