var express = require('express');
var router = express.Router();

var route = require('../controller/routeController');
var createRequest = require('../controller/requestController')
var getResults = require('../controller/resultController');
var del = require('../controller/deleteController');


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
        failureFlash: true,
        successFlash: true
    }));

    /* handle logout */
    router.get('/logout', route.getLogout);

    /* GET settings page */
    router.get('/settings', isAuthenticated, route.getSettings);

    /* handle update POST */
    router.post('/settings', isAuthenticated, passport.authenticate('update', {
        successRedirect: '/request',
        failureRedirect: '/settings',
        failureFlash: true,
        successFlash: true
    }));

    /* GET request page */
    router.get('/request', isAuthenticated, route.getRequest);

    /* handle request POST */
    router.post('/request', isAuthenticated, createRequest);

    /* GET results page */
    router.get('/results', isAuthenticated, getResults);

    /* handle request delete */
    router.get('/deleteRequest', isAuthenticated, del.deleteRequest);

    /* handle user delete */
    router.get('/deleteUser', isAuthenticated, del.deleteUser);

    return router;
}
