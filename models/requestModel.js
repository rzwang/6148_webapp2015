var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    firstname: String,
    lastname: String,
    pickup: String,
    pickup_loc_lat: Number,
    pickup_loc_lng: Number,
    dropoff: String,  
    dropoff_loc_lat: Number,
    dropoff_loc_lng: Number,
    date: String,
    time_disp: String, 
    time_calc: Number,
    phone: String
});

//MODELs
module.exports = mongoose.model('Request', requestSchema);