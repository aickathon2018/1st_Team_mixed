var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var session = require('session')
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var parcelRouter = require('./routes/parcel')

var app = express()

app.use(logger('dev'))
// app.use('/parcel/*/sign', bodyParser.raw({ limit: '50mb', type: '*/*' }))
app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/parcel', parcelRouter)

module.exports = app
