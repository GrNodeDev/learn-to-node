/*
* This will act as an http server at http://localhost:<PORT>/. GET requests made
* to http://localhost:<PORT>/<:name> will return a greeting with the supplied name.
*/
var http = require('http');
var Hello = require('./hello');

var PORT=8282;
var filepath = './helloGreeting.txt';

var greeter = new Hello(filepath);
greeter.on('fileRead', function(filePath) {
  console.log('fileRead event: ' + filePath);
});

// Handles the incoming request and sends back a response of the greeting
function handleRequest(request, response) {
  var name = request.url.replace('/', '');

  greeter.hello(name, function(err, greeting) {
    response.end(greeting + '\n');
  })
}

// Create a server & start listening on specified port
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
