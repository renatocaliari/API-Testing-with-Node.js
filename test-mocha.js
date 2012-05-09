var should = require('should'),
	rest = require('restler');

describe('api.staging', function(){
  describe('GET http://www.example.com', function(){
    it('respond with status code', function(callback){
		rest.get('http://www.example.com')
			.on('complete', function (data, response) {
			  response.statusCode.should.equal(200);
			  callback();
			});
		});
	})
})