var Request = require('../models/requestModel');

function distance(loc1, loc2) {
    var lat1 = loc1[0];
    var lng1 = loc1[1];
    var lat2 = loc2[0];
    var lng2 = loc2[1];

    return Math.sqrt(Math.pow(lat1-lat2, 2) + Math.pow(lng1-lng2, 2))
};

function sort(results) {
    
};

// 0.000508204972 0.029118

var getResults = function(req, res) {
    if (req.user.hasReq === "") {
        res.redirect('/request');
    } else {
        Request.findOne({ _id: req.user.hasReq }, function(err, request) {
            var allResults = [];

            Request.find({
                _id: { $ne: request._id },
                date: request.date,
                time_calc: { $gte: request.time_calc-100, $lte: request.time_calc+100 }
                // pickup_loc[0]: { $gte: request.pickup_loc[0]-0.000508204972, $lte: request.pickup_loc[0]+0.000508204972 },
                // pickup_loc[1]: { $gte: request.pickup_loc[1]-0.000508204972, $lte: request.pickup_loc[1]+0.000508204972 },
                // dropoff_loc[0]: { $gte: request.dropoff_loc[0]-0.000508204972, $lte: request.dropoff_loc[0]+0.000508204972 }
                // dropoff_loc[1]: { $gte: request.dropoff_loc[1]-0.000508204972, $lte: request.dropoff_loc[1]+0.000508204972 }
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
