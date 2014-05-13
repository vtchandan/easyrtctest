// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
         // web socket external module


var webServer = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(8080);




