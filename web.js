
var express = require('express');

var buffer = new Buffer(100000);
var sys = require("sys");


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var fs= require("fs");
   var content  = fs.readFileSync("index.html");

    buffer.write(content.toString(),"utf-8");


  response.send(buffer.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
