const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');

const db_url = 'mongodb://kate:rfnz98grf@ds159782.mlab.com:59782/itmo_info';
var db = mongojs(db_url, ['users']);


//Connecting urls to our response
router.get('/', function (req, res) {  
    res.send('Hello hole World!');
  });

router.get('/ktu', function (req, res) {
  db.on('error', function(err) {
    console.log('we had an error. '+err);
  });

  db.users.findOne(function(err, user) {
    if( err || !user) res.send('NO user was found');
    else res.send('user is found');
  });
  });

module.exports = router;