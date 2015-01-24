var Request = require('../models/requestModel');
var hour = 100; // 1 hour * scale (2 mi = 5 min)
var lat2 = 0.03; // 2 miles in degrees lat
var lng2 = 0.03; // average of 2 miles in degrees lng

function compare(request) {
    return function(a, b) {
        var a_timeDiff = Math.abs(request.time_calc - a.time_calc);
        var a_pickup_latDiff = Math.abs(request.pickup_lat - a.pickup_lat);
        var a_pickup_lngDiff = Math.abs(request.pickup_lng - a.pickup_lng);
        var a_dropoff_latDiff = Math.abs(request.dropoff_lat - a.dropoff_lat);
        var a_dropoff_lngDiff = Math.abs(request.dropoff_lng - a.dropoff_lng);
        var aDiff = a_timeDiff/(3*hour) + a_pickup_latDiff/lat2 + a_pickup_lngDiff/lng2 + a_dropoff_latDiff/lat2 + a_dropoff_lngDiff/lng2;

        var b_timeDiff = Math.abs(request.time_calc - b.time_calc);
        var b_pickup_latDiff = Math.abs(request.pickup_lat - b.pickup_lat);
        var b_pickup_lngDiff = Math.abs(request.pickup_lng - b.pickup_lng);
        var b_dropoff_latDiff = Math.abs(request.dropoff_lat - b.dropoff_lat);
        var b_dropoff_lngDiff = Math.abs(request.dropoff_lng - b.dropoff_lng);
        var bDiff = b_timeDiff/(3*hour) + b_pickup_latDiff/lat2 + b_pickup_lngDiff/lng2 + b_dropoff_latDiff/lat2 + b_dropoff_lngDiff/lng2;

        return aDiff - bDiff;
    };
};

// var compare = function(a, b) {
//     var timeDiff = Math.abs(a.time_calc - b.time_calc);
//     var pickup_latDiff = Math.abs(a.pickup_lat - b.pickup_lat);
//     var pickup_lngDiff = Math.abs(a.pickup_lng - b.pickup_lng);
//     var dropoff_latDiff = Math.abs(a.dropoff_lat - b.dropoff_lat);
//     var dropoff_lngDiff = Math.abs(a.dropoff_lng - b.dropoff_lng);
//     return timeDiff/hour + pickup_latDiff/lat2 + pickup_lngDiff/lng2 + dropoff_latDiff/lat2 + dropoff_lngDiff/lng2;
// };

var getResults = function(req, res) {
    if (req.user.hasReq === "") {
        res.redirect('/request');
    } else {
        Request.findById(req.user.hasReq, function(err, request) {
            Request.find({
                _id: { $ne: request._id }, // not itself
                date: request.date, // same date
                time_calc: { $gte: request.time_calc-hour, $lte: request.time_calc+hour }, // difference of 1 hour
                pickup_lat: { $gte: request.pickup_lat-lat2, $lte: request.pickup_lat+lat2 }, // difference of ~2 miles
                pickup_lng: { $gte: request.pickup_lng-lng2, $lte: request.pickup_lng+lng2 },
                dropoff_lat: { $gte: request.dropoff_lat-lat2, $lte: request.dropoff_lat+lat2 },
                dropoff_lng: { $gte: request.dropoff_lng-lng2, $lte: request.dropoff_lng+lng2 },
            }, function(err, results) {
                var sorted = results.sort(compare(request));
                res.render('results', { title: 'hitch | Results', matches: sorted, message: req.flash('message') });
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
