var express = require('express');
var router = express.Router();

//Connecting urls to our response
router.get('/', function (req, res) {
    res.send('Hello World!');
  });

router.get('/ktu', function (req, res) {
    res.send('Wow! KTU again');
  });

module.exports = router;