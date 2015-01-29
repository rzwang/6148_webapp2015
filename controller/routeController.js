var route = {};

route.getHome = function(req, res) {
    if (!req.user) {
        res.render('index', { title: 'hitch', logout_message: req.flash('logout_message'), signup_mesage: req.flash('signup_message')}); // FIX ERROR MESSAGING
    } else if (req.user.hasReq === "") {
        res.redirect('/request');
    } else {
        res.redirect('/results');
    };
};

route.getSignup = function(req, res) {
    res.redirect('/#signup');
};

route.getLogin = function(req, res) {
    if (!req.user) {
        res.render('login', { title: 'hitch | Login', message: req.flash('message') });
    } else if (req.user.hasReq === "") {
        res.redirect('/request');
    } else {
        res.redirect('/results');
    };
};

route.getLogout = function(req, res) {
    req.logout();
<<<<<<< HEAD
    req.flash( 'logout_message', 'You have been successfully logged out' );
=======
>>>>>>> 1e6716d595a22c16fa635152d37d4dc8cd4f9f00
    res.redirect('/');
};

route.getSettings = function(req, res) {
    res.render('settings', { title: req.user.username + ' | Settings', user: req.user, message: req.flash('message') })
};

route.getRequest = function(req, res){
    if (req.user.hasReq === "") {
        res.render('request', { title: 'hitch a ride!', message: req.flash('message') });
    } else {
        res.redirect('/results');
    };
};

module.exports = route;
