const express = require('express');
const routs = require('./server/routes');

//Creating simple server
const app = express();
const port = 4200;

//Routes
app.use('/', routs);

//Start the server
app.listen(port, function () {
  console.log('Starting app listening on port 4200!');
});

