var express = require('express');
var fs=require('fs);

var app = express.createServer(express.logger());
var buf_contents = fs.readFileSync('index.html','utf-8');
var str_contents = buf_contents.toString();


app.get('/', function(request, response) {
  response.send(str_contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
