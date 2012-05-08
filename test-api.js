var vows = require('vows'),
	api = require('./lib/util').api;

	vows.describe('Staging v1.1').addBatch(
	{ 
		'Catalog':{
			'GET http://api.example.com':	api.getStatus(200),
		}
	}
	).run();