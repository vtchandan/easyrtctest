// Load required modules
var http    = require("http");              // http server core module



var webServer = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(1337);




