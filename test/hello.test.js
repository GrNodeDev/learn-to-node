/*
* This is an asynchronous Mocha test, which tests the behavior of the `hello`
* function.
*/
var assert = require('assert');
var Hello = require('../hello.js');

var filePath = './cheersGreeting.txt';
var greeter;

describe('hello', function() {

  beforeEach(function() {
    greeter = new Hello(filePath);
  });

  it('should say cheers using the name given', function(done) {
    greeter.hello('jason', function(err, greeting) {
      assert.equal(greeting, 'Cheers jason');
      done();
    });
  });
});
