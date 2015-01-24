var Request = require('../models/requestModel');

var createRequest = function(req, res){
    var newRequest = new Request({
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        pickup: req.body['pickup'],
        pickup_loc: {
            lat: req.body['pickup_loc'].split(', ')[0],
            lng: req.body['pickup_loc'].split(', ')[1]
        },
        dropoff: req.body['dropoff'],
        dropoff_loc: {
            lat: req.body['dropoff_loc'].split(', ')[0],
            lng: req.body['dropoff_loc'].split(', ')[1]
        },
        date: req.body['date'],
        time_disp: req.body['time'],
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
