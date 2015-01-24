var Request = require('../models/requestModel.js');

var createRequest = function(req, res){
    var newReq = new Request({
        firstname: req.user.firstname,
        lastname: req.user.lastname, 
        pickup: req.body['pickup'],
        pickup_loc: req.body['pickup_loc'].split(', ').map(Number),
        dropoff: req.body['dropoff'],
        dropoff_loc: req.body['dropoff_loc'].split(', ').map(Number),
        time_disp: req.body['time'],
        time_calc: req.body['time_calc'],
        phone: req.user.phone,
        results: []
    });
    newReq.save(function(err, request) {
        if (err) {
            req.user.hasReq = [false, ""];
            req.user.save();
            console.log(err);
        }
        if (request) {
            req.user.hasReq = [true, request._id];
            req.user.save(function (err, result){
                res.redirect('/results');
            });
        }        
    });
}


module.exports = [
    createRequest
];
