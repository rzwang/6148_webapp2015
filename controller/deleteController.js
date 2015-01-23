var Request = require('../models/requestModel');

var deleteRequest = function(req, res){
    Request.findByIdAndRemove(req.user.hasReq[1], function(err, res) {
    });
    req.user.hasReq = [false, ""];
    req.user.save();
    res.redirect('/request');
};

module.exports = deleteRequest;
