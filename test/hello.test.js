/*
* This is an asynchronous Mocha test, which tests the behavior of the `hello`
* function.
*/
var assert = require('assert');
var hello = require('../hello.js');

describe('hello', function() {
  it('should say cheers using the name given', function(done) {
    hello('jason', function(err, greeting) {
      assert.equal(greeting, 'Hello jason');
      done();
    });
  });
});
