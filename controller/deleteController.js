var Request = require('../models/requestModel.js');

var deleteRequest = function (req, res) {
    if (req.user && req.user.hasReq.length !== 0) {
        Request.findByIdAndRemove(req.user.hasReq, function(err, deleted_request){});
        req.user.hasReq = "";
        req.user.save();
        res.redirect('/request');
    } else {
        res.redirect('/login');
    } 
};

module.exports = [
    deleteRequest
];