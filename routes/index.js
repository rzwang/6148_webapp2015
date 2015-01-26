var express = require('express');
var router = express.Router();

var Request = require('../models/requestModel.js');
var createRequest = require('../controller/requestController.js');
var getResults = require('../controller/resultsController.js');
var deleteRequest = require('../controller/deleteController.js');
var updateUser = require('../controller/settingsController.js');
var routes =require('../controller/routesController.js');

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
    router.get('/', routes.getHome);

    /* Handle signup POST */
    router.post('/', passport.authenticate('signup', {
        successRedirect: '/request',
        failureRedirect: '/#signup',
        failureFlash: true,
        successFlash: true
    }));

    /* GET login page */
    router.get('/login', routes.getLogin);

    /* Handle login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/request',
        failureRedirect: '/login',
        failureFlash: true, 
        successFlash: true
    }));

    /* Handle Logout */
    router.get('/logout', routes.getLogout);

    /* GET request page. */
    router.get('/request', isAuthenticated, routes.getRequest);

    /* Handle request POST */
    router.post('/request', createRequest);

    /* GET results page */
    router.get('/results', isAuthenticated, getResults);

    /* Handle delete GET - Drop request */
    router.get('/delete', deleteRequest);

    /* Handle settings GET */
    router.get('/settings', isAuthenticated, updateUser);

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
