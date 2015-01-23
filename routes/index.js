var express = require('express');
var router = express.Router();
var app = express();

var route = require('../controller/routeController');
var createRequest = require('../controller/requestController')
// var getResults = require('../controller/resultController');
var deleteRequest = require('../controller/deleteController');


var isAuthenticated = function (req, res, next){
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = function(passport){

    /* GET home page */
    router.get('/', route.getHome);

    /* GET signup page */
    router.get('/signup', route.getSignup);

    /* handle signup POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/request',
        failureRedirect: '/#signup',
        failureFlash: true,
        successFlash: true
    }));

    /* GET login page */
    router.get('/login', route.getLogin);

    /* handle login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/request',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /* handle logout */
    router.get('/logout', route.getLogout);

    /* GET request page. */
    router.get('/request', isAuthenticated, route.getRequest);

    /* handle request POST */
    router.post('/request', createRequest);

    /* GET results page. */
    // router.get('/results', isAuthenticated, getResults);

    /* handle delete */
    router.get('/delete', isAuthenticated, deleteRequest);

    return router;
}
