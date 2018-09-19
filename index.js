var express = require('express');

//Creating simple server
var app = express();

//Connecting url '/' to our response
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Start the server
app.listen(4200, function () {
  console.log('Starting app listening on port 4200!');
});

