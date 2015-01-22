var express = require('express');
var router = express.Router();
var app = express();
var passport = require('passport');
var flash = require('connect-flash');
app.use(flash());

var Request = require('../models/requestModel.js');
var Loc = require('../public/javascripts/locationFiller.js');

var isAuthenticated = function (req, res, next){
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object.
    // A middleware is allowed to add properties to req and rsp objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/login');
}

module.exports = function(passport){

    /* GET home page */
    router.get('/', function(req, res) {
        if (!req.user) {
            res.render('index', { title: 'hitch', message: req.flash('message')});
        }
        else if (req.user.hasReq) {
            res.redirect('/results');
        }
        else {
            res.redirect('/request');
        }
    });

    /* Handle signup POST */
    router.post('/', passport.authenticate('signup', {
        successRedirect: '/request',
        failureRedirect: '/#signup',
        failureFlash: true,
        successFlash: true
    }));

    /* GET login page */
    router.get('/login', function(req, res) {
        if (!req.user) {
            res.render('login', {title: 'hitch | Login', message: req.flash('message')});
        }
        else if (req.user.hasReq) {
            res.redirect('/results');
        }
        else {
            res.redirect('/request');
        }  
    });

    /* Handle login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/request',
        failureRedirect: '/login',
        failureFlash: true, 
        successFlash: true
    }));

    /* Handle Logout */
    router.get('/logout', function(req, res) {
        req.logout(); 
        res.redirect('/');
    });

    /* GET request page. */
    router.get('/request', isAuthenticated, function(req, res){
        if (req.user.hasReq) {
            res.redirect('/results');
        }
        else {
            res.render('request', {title: 'hitch me a ride!', message: req.flash('message')});
        }
    });

    /* Handle request POST */
    router.post('/request', function(req, res){
        var newReq = new Request({
            firstname: req.user.firstname,
            lastname: req.user.lastname, 
            pickup: req.body['pickup'],
            pickup_loc: Loc.auto_pickup,
            dropoff: req.body['dropoff'],
            dropoff_loc: Loc.auto_dropoff,
            time_disp: req.body['time'],
            time_calc: req.body['time_calc'],
            phone: req.user.phone,
            results: []
        });
        req.user.hasReq = true;
        req.user.save();
        newReq.save(function(err, result) {         
            res.redirect('/results');
        });
    });

    /* GET results page */
    router.get('/results', isAuthenticated, function(req, res) {
        if (req.user.hasReq) { 
            var matches = [];
            Request.find({}, function(err, results) {
                results.forEach(function(result) {
                    matches.push(result);
                });
                console.log(matches);
                res.render('results', {title: 'hitch | Results', results: matches, message: req.flash('message')});
            });
        }
        else {
            res.redirect('/request');
        }
    });

    /* Handle delete GET - Drop request */
    router.get('/delete', function (req, res) {
        req.user.hasReq = false;
        req.user.save();
        // TAKE USER'S REQUEST OUT OF DATABASE
        res.redirect('/request');
    });

    return router;
}

// // ADD THESE BACK IN WHEN THE VIEWS FILES ARE CREATED

/* GET signup page */
//- ADD IN SEPARATE SIGNUP PAGE LATER
    // router.get('/signup', function(req, res) {
    //     if (!req.user) {
    //         res.render('signup', {title: 'hitch | Sign Up', message: req.flash('message')});
    //     }
    //     else if (req.user.hasReq) {
    //         res.redirect('/results');
    //     }
    //     else {
    //         res.redirect('/request');
    //     }      
    // });

// var iDiv = window.content.document.createElement('div');
// iDiv.id = 'match';
// iDiv.className = 'match';
// window.content.document.body.appendChild(iDiv);

// geo: geoNear and geoSearch
