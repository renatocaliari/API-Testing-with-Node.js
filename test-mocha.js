var should = require('should'),
	rest = require('restler');

describe('api.staging', function(){
  describe('GET catalog/v1.1/titles/', function(){
    it('respond with status code', function(callback){
		rest.get('http://api.staging.netmovies.com.br/catalog/v1.1/titles/')
			.on('complete', function (data, response) {
			  response.statusCode.should.equal(200);
			  callback();
			});
		});
	})
})