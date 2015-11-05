var fs = require('fs');

var filepath = './greeting.txt';

function hello(name, cb) {
  fs.readFile(filepath, 'utf8', function(err, greeting) {
    if (err) {
      return cb(err);
    }

    var message = greeting.trim() + ' ' + name;
    return cb(null, message);
  });
}

module.exports = hello;
