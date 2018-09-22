const express = require('express');
const router = express.Router();

//Connection options for Data base
const mongoose = require('mongoose');
const db_url = 'mongodb://kate:rfnz98grf@ds159782.mlab.com:59782/itmo_info'; 

//Connecting urls to our response
router.get('/', function (req, res) {  
    res.render('index', { title: 'Hey world', message: 'Hello, it\'s pug there!'});
  });

module.exports = router;
