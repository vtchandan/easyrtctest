// Load required modules
var http    = require("http");              // http server core module
var port = process.env.PORT || 1337;


http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);




