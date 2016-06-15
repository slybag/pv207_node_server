var express = require('express');
var xml = require('xml');
var url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var invoice = url_parts.query.invoice;

    var price = 0;

    var split = invoice.split('.');

    for (var i = 0; i < split.length; i++) {
        var drug = split[i].split(',');
        price += drug[1] * drug[2];
    }

    var xml = '<invoice>' +
        '<goods>' + invoice + '</goods>' +
        '<price>' + price + '</price>' +
        '</invoice>';

    res.set('Content-Type', 'text/xml');
    res.send(xml);
});

module.exports = router;

