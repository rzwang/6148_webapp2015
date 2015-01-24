var Request = require('../models/requestModel');
var hour = 100; // 1 hour
var lat2 = 0.029118; // 2 miles in degrees lat
var lng2 = 0.022708; // average of 2 miles in degrees lng

function compare(request, other) {
    var timeDiff = Math.abs(request.time_calc - other.time_calc);
    var pickup_latDiff = Math.abs(request.pickup_lat - other.pickup_lat);
    var pickup_lngDiff = Math.abs(request.pickup_lng - other.pickup_lng);
    var dropoff_latDiff = Math.abs(request.dropoff_lat - other.dropoff_lat);
    var dropoff_lngDiff = Math.abs(request.dropoff_lng - other.dropoff_lng);
    return timeDiff/hour + pickup_latDiff/lat2 + pickup_lngDiff/lng2 + dropoff_latDiff/lat2 + dropoff_lngDiff/lng2;
};

var getResults = function(req, res) {
    if (req.user.hasReq === "") {
        res.redirect('/request');
    } else {
        Request.findById(req.user.hasReq, function(err, request) {
            var allResults = [];

            Request.find({
                _id: { $ne: request._id },
                date: request.date,
                time_calc: { $gte: request.time_calc-hour, $lte: request.time_calc+hour }, // difference of 1 hour
                pickup_lat: { $gte: request.pickup_lat-lat2, $lte: request.pickup_lat+lat2 }, // difference of ~2 miles
                pickup_lng: { $gte: request.pickup_lng-lng2, $lte: request.pickup_lng+lng2 },
                dropoff_lat: { $gte: request.dropoff_lat-lat2, $lte: request.dropoff_lat+lat2 },
                dropoff_lng: { $gte: request.dropoff_lng-lng2, $lte: request.dropoff_lng+lng2 },
            }, function(err, results) {
                if (results) {
                    results.forEach(function(result) {
                        allResults.push(result);
                    });
                };
            var sorted = allResults.sort(compare(request, other));
            res.render('results', { title: 'hitch | Results', results: sorted, message: req.flash('message') });
            });
        });
    };
};

module.exports = getResults;


// =========================================

    // // CHANGE THESE LATER
    // timeweight: 1,
    // pickupweight: 1,
    // dropoffweight: 1,

    // cost = (timeweight * timediff) + (pickupweight * pickupdist) + (dropoffweight * dropoffdist)

    // sort results by cost

    // return sorted result
