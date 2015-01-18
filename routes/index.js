var express = require('express');
var router = express.Router();


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

    /* GET home page. */
    router.get('/', function(req, res) {
      res.render('index', { title: 'hitch' });
    });

    /* GET signup page. */
    router.get('/signup', function(req, res) {
        res.render('signup', {title: 'hitch | Sign Up', message: req.flash('error')});
    });

    /* Handle signup POST. */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/request',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    /* GET login page. */
    router.get('/login', function(req, res) {
        res.render('login', {title: 'hitch | Login', message: req.flash('error')});
    });

    /* Handle login POST. */
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
    router.get('/request', function(req, res){
        res.render('request', {title: 'hitch me a ride!'});
    });

    // // ADD THESE BACK IN WHEN THE VIEWS FILES ARE CREATED

    // /* GET results page. */
    // router.get('/results', function(req, res) {
    //     res.render('results', {title: 'Results'});
    // });

    return router;
}
