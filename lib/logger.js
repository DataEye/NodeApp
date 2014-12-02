var log4js = require('log4js')
var fs = require('fs')

log4js.configure({
	appenders: [
		{
			type: 'file',
			filename: __dirname + '/../logs/node.log',
			category: 'node',
			maxLogSize: 1024 * 1024 * 2,
			backups: 2
		}
	]
})

var logger = log4js.getLogger('node')

//创建单独的logger文件
exports.getLogger = function(filename) {
	if (!filename) {
		return logger
	}
	log4js.addAppender(log4js.appenders.file(__dirname + '/../logs/' + filename + '.log'), filename)
	return log4js.getLogger(filename)
}
