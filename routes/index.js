var express = require('express');
var router = express.Router();
var Request = require('../models/request');


var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/login');
}

module.exports = function(passport){

    /* GET home page */
    router.get('/', function(req, res) {
      res.render('index', { title: 'hitch' });
    });

    /* GET signup page */
    router.get('/signup', function(req, res) {
        res.render('signup', {title: 'hitch | Sign Up', message: req.flash('notice')});
    });

    /* Handle signup POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/request',
        failureRedirect: '/signup',
        failureFlash: true,
        successFlash: true
    }));

    /* GET login page */
    router.get('/login', function(req, res) {
        res.render('login', {title: 'hitch | Login', message: req.flash('notice')});
    });

    /* Handle login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/request',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    /* GET request page. */
    router.get('/request', isAuthenticated, function(req, res){
        res.render('request', {title: 'hitch me a ride!', message: req.flash('notice')});
    });

    /* Handle request POST */
    router.post('/request', function(req, res){
        var newRequest = new Request({
            firstname: req.body['firstname'],
            lastname: req.body['lastname'],
            pickup: req.body['pickup'],
            dropoff: req.body['dropoff'],
            time: req.body['time'],
            phone: req.body['phone']
        });
        newRequest.save(function(err, result) {
            res.redirect('/results') // CHANGE THIS LINK
        });
    });

    /* GET results page. */
    router.get('/results', function(req, res) { // ADD isAuthenticated BACK IN LATER
        // res.render('results', {title: 'hitch | Results'});
        var map = {};
        Request.find({}, function(err, results) {
            results.forEach(function(result) {
                map[result.firstname] = result;
            });
        });
        console.log(map);
        // res.render('results', {title: 'hitch | Results' })

        // Request.find().forEach( function(err, result) {
        //     res.render('results', {title: 'hitch | Results', message: result });
        // });
    });

    return router;
}


// for user specificity: user: req.user
// geo: geoNear and geoSearch
