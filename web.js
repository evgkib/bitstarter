var express = require('express');
var fs = require('fs');
var file = fs.readFileSync('index.html');
var buf = new Buffer(file);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
 });
