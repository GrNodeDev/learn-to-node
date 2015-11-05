/*
* This will act as an http server at http://localhost:8080/. GET requests made
* to http://localhost:8080/<:name> will return a greeting with the supplied name.
*/
var http = require('http');
var hello = require('./hello');

const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response) {
  var name = request.url.replace('/', '');

  hello(name, function(err, greeting) {
    response.end(greeting + '\n');
  })
}

// Create a server & start listening on specified port
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
