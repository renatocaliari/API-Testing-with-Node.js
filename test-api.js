var vows = require('vows'),
	it = require('./lib/util').it;

	vows.describe('Staging v1.1').addBatch(
	{ 
		'Catalog':{
			'GET http://api.example.com':	it.respondsWith(200),
			'POST http://api.example.com':	it.withParams({param1: "value1"}).respondsWith(200)
		}
	}
	).run();