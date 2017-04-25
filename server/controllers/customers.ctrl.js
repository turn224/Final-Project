var express = require('express');
var procedures = require('../procedures/customers.proc');
var auth = require('../middleware/auth.mw');
var passport = require('passport');
var utils = require('../config/utils');
var eSvc = require('../services/email.svc');

var router = express.Router();

// router.get('/generateHash/:pw', function(req, res) {
//     utils.encryptPassword(req.params.pw)
//     .then(function(hash) {
//         res.send(hash);
//     }, function(err) {
//         console.log(err);
//         res.sendStatus(500);
//     });
// })

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        // console.log(user);
        // console.log(info);
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!user) {
            // console.log('not authorized');
            return res.status(401).send(info);
        }
        req.logIn(user, function (err) {
            if (err) {
                console.log('here');
                console.log(err) ;
                return res.sendStatus(500); 
            }
            else {
                return res.send(user);
            }
        });
    })(req, res, next);
});
router.get('/logout', function (req, res) {
    req.session.destroy(function () {
        req.logOut();
        res.sendStatus(204);
    });
});
router.get('/', function (req, res) {
    return procedures.all().then(function (users) {
        res.send(users);
    }, function (err) {
        res.status(500).send(err);
    });
});
router.post('/', auth.isLoggedIn, auth.isAdmin, function (req, res) {
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

router.get('/me', function (req, res) {
    // /me should check if req.user exists
    // if it is, you are logged in and you should res.send req.user
    // if it is not, you need to send status 401
    res.send(req.user);
}), function(err) {
    console.log(err);
    res.status(401).send(err);
}

router.get('/:id', function (req, res) {
    return procedures.read(req.params.id).then(function (user) {
        res.send(user);
    }), function (err) {
        res.status(500).send(err);
    }
});
router.put('/:id', auth.isLoggedIn, auth.isAdmin, function (req, res) {
    return procedures.update(req.body, req.params.id)
        .then(function (success) {
            res.sendStatus(204);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
});
module.exports = router;
