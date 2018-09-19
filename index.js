var express = require('express');
let routs = require('./server/routes');

//Creating simple server
var app = express();

//Routes
app.use('/', routs);

//Start the server
app.listen(4200, function () {
  console.log('Starting app listening on port 4200!');
});

