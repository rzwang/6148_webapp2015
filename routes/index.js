var express = require('express');
var router = express.Router();
var app = express();
var passport = require('passport');


var Request = require('../models/request.js');

var isAuthenticated = function (req, res, next){
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = function(passport){

    /* GET home page */
    router.get('/', function(req, res) {
        if (!req.user) {
            res.render('index', { title: 'hitch', message: req.flash('message') });
        } else if (req.user.hasReq) {
            res.redirect('/results');
        } else {
            res.redirect('/request');
        };
    });

    /* GET signup page */
    router.get('/signup', function(req, res) {
        res.redirect('/#signup');
    });

    /* handle  signup POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/request',
        failureRedirect: '/#signup',
        failureFlash: true,
        successFlash: true
    }));

    /* GET login page */
    router.get('/login', function(req, res) {
        if (!req.user) {
            res.render('login', { title: 'hitch | Login', message: req.flash('message') }); // FIX ERROR MESSAGING
        } else if (req.user.hasReq) {
            res.redirect('/results');
        } else {
            res.redirect('/request');
        };
    });

    /* handle login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/request',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /* handle logout */
    router.get('/logout', function(req, res) {
        req.logout();
        req.flash( 'message', 'You have been successfully logged out' );
        res.redirect('/');
    });

    /* GET request page. */
    router.get('/request', isAuthenticated, function(req, res){
        if (req.user.hasReq) {
            res.redirect('/results')
        } else {
            res.render('request', { title: 'hitch me a ride!', message: req.flash('message') });
        };
    });

    /* handle request POST */
    router.post('/request', function(req, res){
        var newRequest = new Request({
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            pickup: req.body['pickup'],
            dropoff: req.body['dropoff'],
            date: req.body['date'],
            time: req.body['time'],
            phone: req.user.phone,
            results: []
        });
        req.user.hasReq = true;
        req.user.save();
        // SEARCH ALGORITHM HERE (NEWREQUEST.RESULTS = FROMSEARCH)
        newRequest.save(function(err, result) {
            res.redirect('/results');
        });
    });

    /* GET results page. */
    router.get('/results', isAuthenticated, function(req, res) {
        if (!req.user.hasReq) {
            res.redirect('/request');
        } else {
            var allresults = [];
            Request.find({}, function(err, results) { // REDIFINE SEARCH PARAMETERS
                results.forEach(function(result) {
                    allresults.push(result);
                });
                res.render('results', { title: 'hitch | Results', results: allresults, message: req.flash('message') });
            });
        };
    });

    return router;
}

// geo: geoNear and geoSearch
