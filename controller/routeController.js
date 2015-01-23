var route = {};

route.getHome = function(req, res) {
    if (!req.user) {
        res.render('index', { title: 'hitch', message: req.flash('message') }); // FIX ERROR MESSAGING
    } else if (req.user.hasReq[0]) {
        res.redirect('/results');
    } else {
        res.redirect('/request');
    };
};

route.getSignup = function(req, res) {
    res.redirect('/#signup');
};

route.getLogin = function(req, res) {
    if (!req.user) {
        res.render('login', { title: 'hitch | Login', message: req.flash('message') });
    } else if (req.user.hasReq[0]) {
        res.redirect('/results');
    } else {
        res.redirect('/request');
    };
};

route.getLogout = function(req, res) {
    req.logout();
    req.flash( 'message', 'You have been successfully logged out' );
    res.redirect('/');
};

route.getRequest = function(req, res){
    if (req.user.hasReq[0]) {
        res.redirect('/results')
    } else {
        res.render('request', { title: 'hitch me a ride!', message: req.flash('message') });
    };
};

module.exports = route;
