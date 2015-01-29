var Request = require('../models/requestModel');
var User = require('../models/userModel');
var del = {};

del.deleteRequest = function(req, res){
    Request.findByIdAndRemove(req.user.hasReq, function(err, res) {});
    req.user.hasReq = "";
    req.user.save();
    req.flash( 'message', 'You have started a new request.' );
    res.redirect('/request');
};

del.deleteUser = function(req, res){
    Request.findByIdAndRemove(req.user.hasReq, function(err, res) {});
    User.remove(req.user, function(err, res) {});
    req.logout();
    req.flash( 'message', 'You have deleted your account.' );
    res.redirect('/');
};

module.exports = del;
