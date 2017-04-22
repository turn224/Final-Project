var express = require("express");
var procedures = require("../procedures/blogs.proc");
var auth = require('../middleware/auth.mw');
var passport = require('passport');

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
    })
    .post(auth.isLoggedIn, auth.isAdmin, function (req, res) {
        return procedures.post(req.body.title, req.body.content)
            .then(function (success) {
                res.status(201).send(success);
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