var request = require('request');

var baseUrl = 'http://localhost:8282/';

function makeRequest(name) {
  var url = baseUrl + name;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    } else {
      console.error('Bad response received');
    }
  });
};

makeRequest('Tim');
