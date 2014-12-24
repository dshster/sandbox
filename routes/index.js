/* global require, module */
'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function(request, response) {
	response.render('index', {
		'title': 'Markup blueprint',
		'header': 'Dmitry Shvalyov',
		'repository': {
			'url': 'https://github.com/dshster',
			'title': 'View My GitHub Profile'
		}
	});
});

module.exports = router;
