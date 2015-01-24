var Request = require('../models/requestModel.js');

var deleteRequest = function (req, res) {
    if (req.user && req.user.hasReq[0]) {
        Request.findByIdAndRemove(req.user.hasReq[1], function(err, deleted_request){});
        req.user.hasReq = [false, ""];
        req.user.save();
        res.redirect('/request');
    } else {
        res.redirect('/login');
    } 
};

module.exports = [
    deleteRequest
];