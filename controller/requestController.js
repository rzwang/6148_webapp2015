var Request = require('../models/requestModel.js');

var createRequest = function(req, res){
    var newReq = new Request({
        firstname: req.user.firstname,
        lastname: req.user.lastname, 
        pickup: req.body['pickup'],
        pickup_lat: req.body['pickup_loc'].split(', ')[0],
        pickup_lng: req.body['pickup_loc'].split(', ')[1],
        dropoff: req.body['dropoff'],
        dropoff_lat: req.body['dropoff_loc'].split(', ')[0],
        dropoff_lng: req.body['dropoff_loc'].split(', ')[1],
        date: req.body['date'],
        time_disp: req.body['time'],
        time_calc: req.body['time_calc'],
        phone: req.user.phone
    });
    newReq.save(function(err, request) {
        if (err) {
            req.user.hasReq = "";
            req.user.save();
            console.log(err);
        }
        if (request) {
            req.user.hasReq = request._id;
            req.user.save(function (err, result){
                res.redirect('/results');
            });
        }        
    });
}


module.exports = [
    createRequest
];
