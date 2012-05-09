var vows = require('vows'),
	client = require('restler'),
	should = require('should');

	vows.describe('Staging v1.1').addBatch(
	{ 
		'Catalog':{
			topic:{},
			'GET http://api.staging.netmovies.com.br/account/v1.1/user/login/': {
				topic: function(parentTopic){
					client.get('http://api.example.com').on('complete', this.callback );
				},
				'should respond with a 200': function(err, result){
					result.should.have.status(200);
				}
			},
			'POST http://api.staging.netmovies.com.br/account/v1.1/user/login/':{	
				topic: function(parentTopic){
					client.post('http://api.example.com', {data: {param1: "value1"}}).on('complete', this.callback );
				},
				'should respond with a 200': function(err, result){
					result.should.have.status(200);
				}
			}
		}
	}
	).run();