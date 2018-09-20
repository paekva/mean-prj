const express = require('express');
const routs = require('./server/routes');
const bodyParser = require("body-parser");
const path = require('path');

//Creating simple server
const app = express();
const port = 4200;

//Routes
app.use('/', routs);

//View Engine
app.set('views', path.join(__dirname, 'views')); // Folder with views
app.set('view engine', 'pug'); //Specify engine

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Start the server
app.listen(port, function () {
  console.log('Starting app listening on port 4200!');
});

