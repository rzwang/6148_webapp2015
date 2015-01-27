var Request = require('../models/requestModel');

var createRequest = function(req, res){
    var pickup_full = req.body['pickup'].split(", ");
    var dropoff_full = req.body['dropoff'].split(", ");

    var newRequest = new Request({
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        pickup: pickup_full.slice(0,pickup_full.length-1).join(", "),
        pickup_lat: req.body['pickup_loc'].split(', ')[0],
        pickup_lng: req.body['pickup_loc'].split(', ')[1],
        dropoff: dropoff_full.slice(0,dropoff_full.length-1).join(", "),
        dropoff_lat: req.body['dropoff_loc'].split(', ')[0],
        dropoff_lng: req.body['dropoff_loc'].split(', ')[1],
        date: req.body['date'],
        date_calc: req.body['date_calc'],
        time: req.body['time'],
        time_calc: req.body['time_calc'],
        phone: req.user.phone
    });
    newRequest.save();
    req.user.hasReq = newRequest._id;
    req.user.save(function(err, result) {
        res.redirect('/results');
    });
};

module.exports = createRequest;
