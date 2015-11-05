var assert = require('assert');
var hello = require('../hello.js');

describe('hello', function() {
  it('should say cheers using the name given', function() {
    var greeting = hello('jason');
    assert.equal(greeting, 'Hello jason');
  });
});
