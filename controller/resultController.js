var Request = require('../models/requestModel');

function sort(results) {
    
};

var getResults = function(req, res) {
    if (req.user.hasReq === "") {
        res.redirect('/request');
    } else {
        Request.findOne({ _id: req.user.hasReq }, function(err, request) {
            var allResults = [];

            Request.find({
                _id: { $ne: request._id },
                date: request.date,
                time_calc: { $gte: request.time_calc-100, $lte: request.time_calc+100 },
                pickup_lat: { $gte: request.pickup_lat-0.029118, $lte: request.pickup_lat+0.029118 }, // 2 miles in degrees lat
                pickup_lng: { $gte: request.pickup_lng-0.022708, $lte: request.pickup_lng+0.022708 }, // average of 2 miles in degrees lng
                dropoff_lat: { $gte: request.dropoff_lat-0.029118, $lte: request.dropoff_lat+0.029118 },
                dropoff_lng: { $gte: request.dropoff_lng-0.022708, $lte: request.dropoff_lng+0.022708 },
            }, function(err, results) {
                if (results) {
                    results.forEach(function(result) {
                        allResults.push(result);
                    });
                };
            // var sorted = sort(allResults);
            res.render('results', { title: 'hitch | Results', results: allResults, message: req.flash('message') });
            });
        });
    };
};

module.exports = getResults;


// =========================================

    // var pickup_lat = parseFloat(req_pickup.split(',')[0]);
    // var pickup_lng = parseFloat(req_pickup.split(',')[1]);
    // var dropoff_lat = parseFloat(req_dropoff.split(',')[0]);
    // var dropoff_lng = parseFloat(req_dropoff.split(',')[1]);

    // search Request database
    // // making results
    // timediff = newrequest.time_calc-time
    // pickupdist = distance(pickup, newrequest.pickup)
    // dropoffdist = distance(dropoff, newrequest.dropoff)

    // for each newrequest:
    //     if newrequest.date == date && timediff <= 100 && pickupdist <= 'NUMBER' && dropoffdist <= "NUMBER":
    //         results += newrequest

    // // CHANGE THESE LATER
    // timeweight: 1,
    // pickupweight: 1,
    // dropoffweight: 1,

    // cost = (timeweight * timediff) + (pickupweight * pickupdist) + (dropoffweight * dropoffdist)

    // sort results by cost

    // return sorted result
