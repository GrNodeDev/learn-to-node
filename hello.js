var fs = require('fs');
var events = require('events');

function Hello(filePath) {
  this.filePath = filePath;
  events.EventEmitter.call(this);

  this.hello = function(name, cb) {
    fs.readFile(this.filePath, 'utf8', function(err, greeting) {
      if (err) {
        return cb(err);
      }

      this.emit('fileRead', this.filePath);

      var message = greeting.trim() + ' ' + name;
      return cb(null, message);
    }.bind(this));
  };
}

Hello.prototype.__proto__ = events.EventEmitter.prototype;

module.exports = Hello;
