var express = require('express');
var passport = require('passport');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var LocalStrategy = require('passport-local').Strategy;
var userProc = require('../procedures/customers.proc');
var pool = require('./db').pool;
var utils = require('../config/utils');

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {
        userProc.readByEmail(email).then(function (user) {
            // console.log(user);
            if (!user) {
                return done(null, false);
            }
            // console.log(user);
            utils.checkPassword(password, user.password)
                .then(function (matches) {
                    // console.log(password);
                    // console.log(user.password);
                    // console.log(matches);
                    if (matches) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Nope" });
                    }
                }, function (err) {
                    return done(err);
                });
        }, function (err) {
            return done(err);
        });
    }));
    passport.serializeUser(function (user, done) {
        console.log(user);
        done(null, user.custID);
    });
    passport.deserializeUser(function (id, done) {
        userProc.read(id).then(function (user) {
            done(null, user);
        }, function (err) {
            done(err);
        });
    });
    var sessionStore = new MySQLStore({
        createDatabaseTable: true
    }, pool);
    app.use(session({
        secret: 'randomly-generated string!',
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = configurePassport;