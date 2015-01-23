var Request = require('../models/requestModel');

// function distance(lat1, lng1, lat2, lng2) {
//     return Math.sqrt(Math.pow(lat1-lat2, 2) + Math.pow(lng1-lng2, 2))
// };

function match(request) {
    var req_date = request.date;
    var req_time = request.time_calc;
    var req_pickup = request.pickup_loc;
    var req_dropoff = request.dropoff_loc;
    var req_results = request.results;

    Request.find({}, function(err, results) {
        results.forEach(function(result) {
            req_results.push("here");            
        });
    });
};



//=====================
    // var pickup_options = { near: req_pickup, maxDistance: 0.000508204972 }; //.029118 deg
    // Request.geoSearch({ 'date': req_date, 'time': { $gte: req_time-100, $lte: req_time+100 } }, pickup_options, function(err, res) {
    //     console.log(res);
    //     var dropoff_options = { near: req_dropoff, maxDistance: 0.000508204972 }; //.029118 deg
    //     res.geoSearch({}, dropoff_options, function(err, results) {
    //         console.log(results);
    //         results.forEach(function(result) {
    //             req_results.push(result);
    //         });
    //     });
    // });
    // console.log(req_results);
//=====================

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





var getResults = function(req, res) {
    if (req.user.hasReq[0]) {
        Request.findOne({ '_id': req.user.hasReq[1] }, function(err, result) {
            match(result);
            result.save();
            res.render('results', { title: 'hitch | Results', results: result.results, message: req.flash('message') });
        });
    } else {
        res.redirect('/request');
    };
};

module.exports = getResults;
