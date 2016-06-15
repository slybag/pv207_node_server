var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var xml = '<invoice>' +
        '<goods>paralen,45,50.ibalgin,79,100</goods>' +
        '<price>10150</price>' +
        '</invoice>';

    res.set('Content-Type', 'text/xml');
    res.send(xml);
});

module.exports = router;




