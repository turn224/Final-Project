var express = require("express");
var procedures = require("../procedures/services.proc");

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
module.exports = router;