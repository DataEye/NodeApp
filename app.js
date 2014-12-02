var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'apps'))
app.set('view engine', 'ejs')

app.use(favicon(__dirname + '/public/img/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

require('./config/routes')(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
		result: err.status || 500,
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
})

var port = '9527'
app.listen(port, function() {
  console.log('Express server listening on port ' + port + ' in ' + app.get('env') + ' mode')
})
