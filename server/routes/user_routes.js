const express = require('express');
const router = express.Router();

//Connection options for Data base
const mongoose = require('mongoose');
const db_url = require('./config/db');

//Adding our db schema
const User = require('../db/user');

//Connecting urls to our response
router.get('/get', function(req,res) {

  mongoose.connect(db_url, function (err) {
 
    if (err) throw err;
    console.log('Successfully connected');

    User.find({
      login: 'sasha'
  }).exec(function(err, user) {
      if (err) throw err;
       
      console.log(user);
  });
  });
});


router.post('/user/save', function (req, res) {

  mongoose.connect(db_url, function (err) {
 
    if (err) throw err;
    console.log('Successfully connected');
  
    let sasha = new User(
      {
        _id: new mongoose.Types.ObjectId(),
        login: "sasha",
        password: "1234",
        birth_date: new Date(1998,6,4),
        course: "Информатика и вычислительная техника",
        start_date: new Date(2016,8,2),
        end_date: new Date(2020,7,32),
      }
    );

    sasha.save(function(err) {
      if (err) throw err;
       
      console.log('User successfully saved.');
    }
    );

  });

  });

module.exports = router;
