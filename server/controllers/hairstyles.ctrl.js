var express = require("express");
var procedures = require("../procedures/hairstyles.proc");

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
    router.route("/:id")
    .get(function (req, res) {
        return procedures.read(req.params.id)
            .then(function (success) {
                res.send(success);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            })
    });
module.exports = router;