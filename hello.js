var fs = require('fs');
var events = require('events');
var util = require("util");

// Create a constructor function
function Hello(filePath) {
  this.filePath = filePath;

  // Initialize event emitter
  events.EventEmitter.call(this);

  this.hello = function(name, cb) {
    fs.readFile(this.filePath, 'utf8', function(err, greeting) {
      if (err) {
        return cb(err);
      }

      // Let them know what's happening
      this.emit('fileRead', this.filePath);

      var message = greeting.trim() + ' ' + name;
      return cb(null, message);
    }.bind(this));
  };
}
util.inherits(Hello, events.EventEmitter);

module.exports = Hello;
