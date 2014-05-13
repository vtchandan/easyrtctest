// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
         // web socket external module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express().createServer();
httpApp.configure(function() {
    httpApp.use(express.static(__dirname + "/static/"));
});

var webServer = http.createServer(httpApp).listen(8080);




