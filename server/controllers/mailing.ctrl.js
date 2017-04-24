var express = require('express');
var procedures = require('../procedures/mailing.proc');
var eSvc = require('../services/email.svc');

var router = express.Router();

router.post('/', function (req, res) {
    var u = req.body;
    return procedures.post(u)
        .then(function (success) {
            eSvc.sendEmail(req.body.fromEmail, req.body.subject, 'fm_lewis@bellsouth.net', req.body.content)
                .then(function (success) {
                    console.log('SUCCESS')
                    res.send('sent');
                }, function (err) {
                    console.log(err);
                    res.status(500).send(err);
                });
        });
});
module.exports = router;