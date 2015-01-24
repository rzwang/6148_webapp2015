var Request = require('../models/requestModel.js');

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

}

var getResults = function(req, res) {
    if (req.user.hasReq[0]) { 
        var matches = [];
        Request.find({ id: {$ne: req.user.hasReq[1]}}, function(err, results) {
            results.forEach(function(result) {
                matches.push(result);
            });
            // console.log(matches);
            res.render('results', {title: 'hitch | Results', results: matches, message: req.flash('message')});
        });
    }
    else {
        res.redirect('/request');
    }
};


module.exports = [
    getResults
];