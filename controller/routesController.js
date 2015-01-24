var routes = {};

routes.getHome = function(req, res) {
        if (!req.user) {
            res.render('index', { title: 'hitch', message: req.flash('message')});
        }
        else if (req.user.hasReq.length !== 0) {
            res.redirect('/results');
        }
        else {
            res.redirect('/request');
        }
    }

routes.getLogin = function(req, res) {
    if (!req.user) {
        res.render('login', {title: 'hitch | Login', message: req.flash('message')});
    }
    else if (req.user.hasReq.length !== 0) {
        res.redirect('/results');
    }
    else {
        res.redirect('/request');
    }  
}

routes.getLogout = function(req, res) {
    req.logout(); 
    res.redirect('/');
}

routes.getRequest = function(req, res){
    if (req.user.hasReq.length !== 0) {
        res.redirect('/results');
    }
    else {
        res.render('request', {title: 'hitch me a ride!', message: req.flash('message')});
    }
}

module.exports = routes;