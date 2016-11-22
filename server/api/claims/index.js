/*
	all routes definitions for a specific controller
*/

'use strict';

var express = require('express'),
	controller = require('./claim.controller'),
	router = express.Router(); // eslint-disable-line new-cap


// define route and point an a specific action in this controller
router.get('/', controller.getStats);

module.exports = router;
