var Request = require('../models/requestModel');
var User = require('../models/userModel');
var date = new Date();
var currentDate = 1000000*(date.getMonth()+1) + 10000*date.getDate() + date.getFullYear();

var clearDatabase = function() {
    Request.find({
        date_calc: { $lt: currentDate },
    }, function(err, results) {
        results.forEach(function(request) {
            User.findOne({ hasReq: request._id }, function(err, user) {
                user.hasReq = "";
                user.save();
            });
            Request.remove(request, function(err, res) {});
        });
    });
};

module.exports = clearDatabase;
