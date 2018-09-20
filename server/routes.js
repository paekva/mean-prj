const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');

const db_url = 'mongodb://kate:rfnz98grf@ds159782.mlab.com:59782/itmo_info';
var db = mongojs(db_url, ['users']);


//Connecting urls to our response
router.get('/', function (req, res) {  
    res.render('index', { title: 'Hey world', message: 'Hello, it\'s pug there!'});
  });

router.get('/ktu', function (req, res) {

  db.users.findOne(function(err, user) {
    if( err) res.send(err);
    else if(!user) req.send('no user was found');
    else res.send(user);
  });

  });

module.exports = router;
