var http = require('http'),
	client = require('restler'),
	should = require('should'),
	assert = require('assert'),
	_ = require('./underscore')._;
	
	var api = (function (){
		var that = this;
		
		return {
			withParams: function withParams(data){
				params = data;
				return this;
			},
			getStatus: function(status, data){
				var context = {
					topic: function () {
						var that = this;
						// Get the current context's name, such as "POST /"
						// and split it at the space.
						var req    = this.context.name.split(/ +/), // ["POST", "/"]
							method = req[0].toLowerCase(),          // "post"
							path   = req[1];                        // "/"

						// Perform the contextual client request,
						// with the above method and path.
						if (method === 'post'){
							client.post(path, {data: that.params}).on('complete', that.callback );
						}else{
							client[method](path).on('complete', that.callback );
						};
					}
				};
				
				var assertStatusAndData = function(code, data) {
					return function (e, result) {
						var responseData = JSON.parse(result.rawEncoded);
						if (data){
							_.each(data, function(value,key){should.strictEqual(eval('responseData.' + key),value)});
						}
						result.should.have.status(code);
					};
				};
				
				// Create and assign the vow to the context.
				// The description is generated from the expected status code
				// and status name, from node's http module.
				// and status name, from node's http module.
				context['should respond with a ' + status + ' ' + http.STATUS_CODES[status]] = assertStatusAndData(status, data);

				return context;
			}
		};
	}());


module.exports.api = api;