var Request = require('../models/requestModel');

var createRequest = function(req, res){
    var newRequest = new Request({
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        pickup: req.body['pickup'],
        pickup_loc: req.body['pickup_loc'],
        dropoff: req.body['dropoff'],
        dropoff_loc: req.body['dropoff_loc'],
        date: req.body['date'],
        time_disp: req.body['time'],
        time_calc: req.body['time_calc'],
        phone: req.user.phone,
        results: []
    });
    req.user.hasReq = true;
    req.user.save();
    newRequest.save(function(err, result) {
        res.redirect('/results');
    });
};

module.exports = createRequest;
