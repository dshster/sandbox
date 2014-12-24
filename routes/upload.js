/* global require, module */
'use strict';

var express = require('express'),
    router = express.Router();

router.get('/upload/', function(request, response) {
	response.render('upload', {
		'title': 'Upload animation'
	});
});

router.post('/upload/', function(request, response) {
	var url = request.body.url;

	console.log(url);
	response.setHeader('Content-Type', 'application/json');
	response.write(JSON.stringify({ result: true }));
	response.end();
});

module.exports = router;
