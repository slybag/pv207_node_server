var express = require('express');
var xml = require('xml');
var url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var orderIdentificator = url_parts.query.orderIdentificator;

    var xmlToReturn = '<orderInformation>' +
        '<recieveStatus>False</recieveStatus>' +
        '</orderInformation>';

    if (orderIdentificator == 'paidnvalid') {
        //PAID AND VALID
        xmlToReturn = '<orderinformation>' +
            '<recieveStatus>True</recieveStatus>' +
            '<isPaid>True</isPaid>' +
            '<drugs>Paralen,Nurofen,Pervitin</drugs>' +
            '</orderinformation>';
    } else if (orderIdentificator ==  'notpaidnvalid') {
        //NOT PAID AND VALID
        xmlToReturn = '<orderinformation>' +
            '<recieveStatus>True</recieveStatus>' +
            '<isPaid>False</isPaid>' +
            '<drugs>Ibalgin,Mucosolvan,Heroin</drugs>' +
            '</orderinformation>';
    }

    res.set('Content-Type', 'text/xml');
    res.send(xmlToReturn);
});

module.exports = router;
