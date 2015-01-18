var express = require('express');
var router = express.Router();
var app = express();
var passport = require('passport');
var flash = require('connect-flash');
app.use(flash());

var isAuthenticated = function (req, res, next){
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object.
    // A middleware is allowed to add properties to req and rsp objects
    if (req.isAuthenticated())
        return next();

    // if user is not authenticatd, redirect to login page
    res.redirect('/login');
}

// Import models file into the router TEST
// var models = require('../models/models');
// models.Photo

// Connect to the database over Mongoose TEST
// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test') // CHANGE THIS LATER!!! run 'mongod' on terminal

module.exports = function(passport){

    /* GET home page. */
    router.get('/', function(req, res) {
      res.render('index', { title: 'hitch' });
    });

    /* GET sign up page */
    router.get('/signup', function(req, res) {
        res.render('signup', {title: 'hitch | Sign Up', message: req.flash('notice')});
        // THIS IS PART OF THE TEST - need to write route to render image 
        // models.Photo.findOne({_id: photoId}, function(err, result) {
        //     res.render('photo', {photo: result});
        // });
    });

    /* Handle sign up POST */
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

    /* GET request page */
    router.get('/request', function(req, res){
        res.render('request', {title: 'hitch me a ride!', message: req.flash('notice')});
    });

    /* Handle request POST */
    router.post('/request', passport.authenticate('request', {
            successRedirect: '/results',
            failureRedirect: '/request',
            failureFlash: true,
            successFlash: true
    }));

    return router;
}

// // ADD THESE BACK IN WHEN THE VIEWS FILES ARE CREATED

/* GET results page */
// router.get('/results', isAuthenticated, function(req, res) {
//     res.render('results', {title: 'hitch | Results'});
// });

// THIS IS PART OF THE TEST
// router.post('/signup', function(req, res) {
//     // create a new photos object
//     var newPhoto = new models.Photo({
//         url: req.body['submitted-url'],
//         caption: req.body['caption']
//     });

//     newPhoto.save(function(err, result) {
//         res.redirect('/photos/' + result._id)
//     })
// });

// module.exports = router;
