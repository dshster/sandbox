/* global require, module */
'use strict';

var express = require('express'),
    router = express.Router();

router.get('/upload', function(request, resource) {
	resource.render('upload', {
		"title": "Upload animation"
	});
});

module.exports = router;
