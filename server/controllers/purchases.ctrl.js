var express = require('express');
var stripeSvc = require('../services/stripe.svc');
var eSvc = require('../services/email.svc');
var procedures = require('../procedures/purchases.proc')

var router = express.Router();

router.route('/')
    .get(function (req, res) {
        return procedures.all()
            .then(function (success) {
                res.send(success);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            });
    });
router.post('/', function (req, res) { // /api/purchases
    var amount = Number(req.body.total) * 100;
    stripeSvc.charge(req.body.stripetransactionid, amount)
    procedures.write(req.body.total, req.body.custName, req.body.productName)
        .then(function (success) {
            eSvc.sendEmail('fm_lewis@bellsouth.net', req.body.subject, 'fm_lewis@bellsouth.net', req.body.content)
            res.sendStatus(204);
        }, function (err) {
            console.log(err);
            res.sendStatus(500);
        });
});
module.exports = router;