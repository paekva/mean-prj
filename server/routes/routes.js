const express = require('express');
const router = express.Router();
const path = require('path');

//Connection options for Data base
const mongoose = require('mongoose');
const db_url = 'mongodb://kate:rfnz98grf@ds159782.mlab.com:59782/itmo_info'; 

//Connecting urls to our response
router.get('/', function (req, res) {  
    //res.render('index', { title: 'Hey world', message: 'Hello, it\'s pug there!'});

    //pointing to a static build of angular front end part
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });

module.exports = router;
