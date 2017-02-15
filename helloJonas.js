var http = require('http');
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World from Jonas at "+Date());
});
// Listen on port 8000 or env
var port = process.env.PORT || 8000
server.listen(port);
// Put a friendly message on the terminal
console.log("listenign to port "+port);