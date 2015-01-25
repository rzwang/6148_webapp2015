var Request = require('../models/requestModel.js');

// CONSTANTS
var lat_diff = .03;  // 2 mi in degrees lat
var lng_diff = .03;  // avg 2 mi in degrees lng
var time_diff = 100; // 1 hour
var date = new Date();
var current_time = date.getHours() * 100 +  date.getMinutes();

function compare(request){
    return function(a, b) {
        var a_diff = Math.abs(request.time_calc - a.time_calc) / (3 * time_diff) +
                    Math.abs(request.pickup_lat - a.pickup_lat) / lat_diff + 
                    Math.abs(request.dropoff_lat - a.dropoff_lat) / lat_diff + 
                    Math.abs(request.pickup_lng - a.pickup_lng) / lng_diff + 
                    Math.abs(request.dropoff_lng - a.dropoff_lng) / lng_diff; 
        var b_diff = Math.abs(request.time_calc - b.time_calc) / (3 * time_diff) +
                    Math.abs(request.pickup_lat - b.pickup_lat) / lat_diff + 
                    Math.abs(request.dropoff_lat - b.dropoff_lat) / lat_diff + 
                    Math.abs(request.pickup_lng - b.pickup_lng) / lng_diff + 
                    Math.abs(request.dropoff_lng - b.dropoff_lng) / lng_diff;
        return a_diff - b_diff;
    };
};

var getResults = function(req, res) {
    if (req.user.hasReq.length !== 0) { 
        Request.findById(req.user.hasReq, function(err, request) {
            Request.find({
                _id: {$ne: request._id},
                date: request.date,
                time_calc: {$gte: request.time_calc - time_diff, $lte: request.time_calc + time_diff},  
                pickup_lat: {$gte: request.pickup_lat - lat_diff, $lte: request.pickup_lat + lat_diff},
                pickup_lng: {$gte: request.pickup_lng - lng_diff, $lte: request.pickup_lng + lng_diff},
                dropoff_lat: {$gte: request.dropoff_lat - lat_diff, $lte: request.dropoff_lat + lat_diff},
                dropoff_lng: {$gte: request.dropoff_lng - lng_diff, $lte: request.dropoff_lng + lng_diff}       
            }, function(err, results) {
                if (err) {
                    console.log(err);
                }
                if (results) {
                    var matches = results.sort(compare(request));
                    res.render('results', {title: 'hitch | Results', results: matches, message: req.flash('message')});
                }
                
            });
        });
    }
    else {
        res.redirect('/request');
    }
};

module.exports = [
    getResults
];