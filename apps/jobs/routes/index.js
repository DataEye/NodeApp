var express = require('express')
var router = express.Router()
var logger = require('../../../lib/logger').getLogger('candidate')

/* GET home page. */
router.get('/', function(req, res) {
	res.render('jobs/views/index')
})

router.post('/send', function(req, res) {
	var nickname = req.param('nickname') || ''
	var tel = req.body.tel || ''
	if (!nickname || !tel) {
		return res.send(400, '缺少相关信息，请检查表单')
	}
	logger.info(nickname.replace(/\s/g, '') + ' ' + tel.replace(/\s/g, ''))
	res.json({
		result: 0
	})
})

module.exports = router
