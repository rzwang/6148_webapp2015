var Request = require('../models/requestModel');

function distance(loc1, loc2) {
    var lat1 = parseFloat(loc1.split(',')[0]);
    var lng1 = parseFloat(loc1.split(',')[1]);
    var lat2 = parseFloat(loc2.split(',')[0]);
    var lng2 = parseFloat(loc2.split(',')[1]);

    return Math.pow(lat1-lat2, 2) + Math.pow(lng1-lng2, 2)
}

function search(request):
    var date = request.date;
    var time = request.time_calc;
    var pickup = request.pickup_loc;
    var dropoff = request.dropoff_loc;
    var results = request.results;

    Request.

    search Request database
    // making results
    timediff = newrequest.time_calc-time
    pickupdist = distance(pickup, newrequest.pickup)
    dropoffdist = distance(dropoff, newrequest.dropoff)

    for each newrequest:
        if newrequest.date == date && timediff <= 100 && pickupdist <= 'NUMBER' && dropoffdist <= "NUMBER":
            results += newrequest

    // CHANGE THESE LATER
    timeweight: 1,
    pickupweight: 1,
    dropoffweight: 1,

    cost = (timeweight * timediff) + (pickupweight * pickupdist) + (dropoffweight * dropoffdist)

    sort results by cost

    return sorted result



var getResults = function(req, res) {
    if (!req.user.hasReq) {
        res.redirect('/request');
    } else {
        var allresults = [];
        Request.find({}, function(err, results) { // REDIFINE SEARCH PARAMETERS
            results.forEach(function(result) {
                allresults.push(result);
            });
            res.render('results', { title: 'hitch | Results', results: allresults, message: req.flash('message') });
        });
    };
}

module.exports = getResults;