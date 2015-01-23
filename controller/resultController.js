var Request = require('../models/requestModel');

function distance(loc1, loc2) {
    var lat1 = loc1[0];
    var lng1 = loc1[1];
    var lat2 = loc2[0];
    var lng2 = loc2[1];

    return Math.sqrt(Math.pow(lat1-lat2, 2) + Math.pow(lng1-lng2, 2))
};

// function match(request) {
//     var req_date = request.date;
//     var req_time = request.time_calc;
//     var req_pickup = request.pickup_loc;
//     var req_dropoff = request.dropoff_loc;
//     var allResults = ['test'];

//     Request.find({}, function(err, results) {
//         results.forEach(function(result) {
//             allResults.push('hello');
//         });
//         allResults.push('helloo');
//     });
//     allResults.push('hellooo');
//     return allResults;
// };

var getResults = function(req, res) {
    if (req.user.hasReq[0]) {
        Request.findOne({ '_id': req.user.hasReq[1] }, function(err, request) {
            var req_date = request.date;
            var req_time = request.time_calc;
            var req_pickup = request.pickup_loc;
            var req_dropoff = request.dropoff_loc;
            var allResults = ['test'];

            Request.find({}, function(err, results) {
                results.forEach(function(result) {
                    allResults.push('hello');
                });
                allResults.push('helloo');
            });
            allResults.push('hellooo');
            res.render('results', { title: 'hitch | Results', results: allResults, message: req.flash('message') });
        });
    } else {
        res.redirect('/request');
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
