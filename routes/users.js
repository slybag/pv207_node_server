var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ seat: ['1a', '1b', '1c', '1d'] }));
});

module.exports = router;
