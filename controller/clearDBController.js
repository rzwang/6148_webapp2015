var Request = require('../models/requestModel.js');
var User = require('../models/userModel.js');

// var delay = 24*60*60*1000; // one day in terms of milliseconds
var delay = 10000; // 10 seconds
var current = new Date();
var currentDate = current.getTime();

var clearDB = function () {
    Request.find({date_calc: {$lt: currentDate}}, function(err, result) {
        if (err) 
            console.log(err);
        if (result)
            console.log(result);
            console.log(result._id);
            result.forEach(function(err) {
                User.findById(result._id, function(err, user){
                console.log(user);
                user.hasReq = "";
                user.save();
                console.log("old requests removed");
                }); 
            });            
    }).remove({date_calc: {$lt: currentDate}}, function(err, result) {});
};

module.exports = [
    clearDB
];
