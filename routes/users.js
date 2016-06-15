var express = require('express');
var xml = require('xml');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/xml');
  var xmlFile = '<lat>38</lat>';

  res.send((xmlFile));
});

module.exports = router;
