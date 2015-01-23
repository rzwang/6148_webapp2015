var Request = require('../models/requestModel');

var deleteRequest = function(req, res){
    Request.findOneAndRemove({ '_id': req.user.hasReq[1] }, function(err, res) {
        console.log('deleted');
    });
    req.user.hasReq = [false, ""];
    req.user.save();
    res.redirect('/request');
};

module.exports = deleteRequest;
