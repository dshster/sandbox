'use strict';

var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

[
	'./routes/index',
	'./routes/upload'
].forEach(function(route) {
	app.use('/', require(route));
});

app.use(function(request, resource, next) {
	var error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use(function(error, request, resource, next) {
    resource.status(error.status || 500);
    resource.render('error', {
        message: error.message,
        error: config.production ? {} : error
    });
});

module.exports = app;
