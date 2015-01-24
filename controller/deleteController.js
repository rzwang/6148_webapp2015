var Request = require('../models/requestModel');

var deleteRequest = function(req, res){
    Request.findByIdAndRemove(req.user.hasReq, function(err, res) {
    });
    req.user.hasReq = "";
    req.user.save();
    res.redirect('/request');
};

module.exports = deleteRequest;
