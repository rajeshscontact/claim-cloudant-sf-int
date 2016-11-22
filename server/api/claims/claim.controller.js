'use strict';
var request = require('request'),
	config = require('../../configuration/environment/development.js'),
	responseBody;

exports.getStats = function(req, res, next) {

	request.get({
		url: 'https://api.us.apiconnect.ibmcloud.com/ashrafinteractive-cloudscom-raj/sb/api/claims/stats'
	}, function(err, response, body) {

		if (err) return next(err);
		responseBody = JSON.parse(body);
		res.send(responseBody);

		return void 0;

	});

};
