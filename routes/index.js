var express = require('express');
var router = express.Router();
var app = express();
var passport = require('passport');
var flash = require('connect-flash');
app.use(flash());

var Request = require('../models/requestModel.js');

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
      res.render('index', { title: 'hitch' });
    });

    /* GET signup page */
    router.get('/signup', function(req, res) {
        res.render('signup', {title: 'hitch | Sign Up', message: req.flash('message')});
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
        res.render('login', {title: 'hitch | Login', message: req.flash('message')});
    });

    /* Handle login POST */
    //req.login()?
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/request',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /* Handle Logout */
    router.get('/logout', function(req, res) {
        req.logout(); 
        res.redirect('/');
    });

    /* GET request page. */
    //isAuthenticated
    router.get('/request', function(req, res){
        res.render('request', {title: 'hitch me a ride!', message: req.flash('message')});
    });

    /* Handle request POST */
    router.post('/request', function(req, res){
        var newReq = new Request({
            firstname: req.body['firstName'],
            lastname: req.body['lastName'], 
            pickup: req.body['pickup'],
            dropoff: req.body['dropoff'],
            time: req.body['time'],
            phone: req.body['phone']
        });
        newReq.save(function(err, result) {
            res.redirect('/results');
        });
    });

    /* GET results page */
    router.get('/results', function(req, res) {
        Request.find({}, function(err, results) {
            results.forEach(function(result) {
                console.log(result);
                // var iDiv = window.content.document.createElement('div');
                // iDiv.id = 'match';
                // iDiv.className = 'match';
                // window.content.document.body.appendChild(iDiv);
            })
        });
        res.render('results', {title: 'hitch | Results'});
    });
    return router;
}

// // ADD THESE BACK IN WHEN THE VIEWS FILES ARE CREATED



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

// geo: geoNear and geoSearch
