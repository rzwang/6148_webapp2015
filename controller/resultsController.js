var Request = require('../models/requestModel.js');
var lat_diff = .03;
var lng_diff = .03;
var time_diff = 100;

function findDistance(loc1, loc2) {
    var lat1 = loc1[0];
    var lat2 = loc2[0];
    var lng1 = loc1[1];
    var lng2 = loc2[1];
    return Math.sqrt(Math.pow(lat1-lat2, 2) + Math.pow(lng1-lng2, 2));
}

function match(request) {
    var req_date = request.date;
    var req_time = request.time_calc;
    var req_pickup = request.pickup_loc;
    var req_dropoff = request.dropoff_loc;

    Request.find({'pickup_loc' : result_pickup, 'dropoff_loc' : result_dropoff})

    geoSearch : near: [lat1,]

};

function compare(request){
    return function(a, b) {
        var a_diff = 3 *Math.abs(request.time_calc - a.time_calc) / time_diff +
                    Math.abs(request.pickup_loc_lat - a.pickup_loc_lat) / lat_diff + 
                    Math.abs(request.dropoff_loc_lat - a.dropoff_loc_lat) / lat_diff + 
                    Math.abs(request.pickup_loc_lng - a.pickup_loc_lng) / lng_diff + 
                    Math.abs(request.dropoff_loc_lng - a.dropoff_loc_lng) / lng_diff; 
        var b_diff = 3 * Math.abs(request.time_calc - b.time_calc) / time_diff +
                    Math.abs(request.pickup_loc_lat - b.pickup_loc_lat) / lat_diff + 
                    Math.abs(request.dropoff_loc_lat - b.dropoff_loc_lat) / lat_diff + 
                    Math.abs(request.pickup_loc_lng - b.pickup_loc_lng) / lng_diff + 
                    Math.abs(request.dropoff_loc_lng - b.dropoff_loc_lng) / lng_diff;
        return a_diff - b_diff;
    };
};

var getResults = function(req, res) {
    if (req.user.hasReq.length !== 0) { 
        var matches = [];
        Request.findById(req.user.hasReq, function(err, request) {
            Request.find({
                id: {$ne: req.user.hasReq},
                date: request.date,
                time: {$gte: request.time_calc - time_diff, $lte: request.time_calc + time_diff},  
                pickup_loc_lat: {$gte: request.pickup_loc_lat - lat_diff, $lte: request.pickup_loc_lat + lat_diff},
                pickup_loc_lng: {$gte: request.pickup_loc_lng - lng_diff, $lte: request.pickup_loc_lng + lng_diff},
                dropoff_loc_lat: {$gte: request.dropoff_loc_lat - lat_diff, $lte: request.dropoff_loc_lat + lat_diff},
                dropoff_loc_lng: {$gte: request.dropoff_loc_lng - lng_diff, $lte: request.dropoff_loc_lng + lng_diff}       
            }, function(err, results) {
                matches = results.sort(compare(request));
                res.render('results', {title: 'hitch | Results', results: matches, message: req.flash('message')});
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