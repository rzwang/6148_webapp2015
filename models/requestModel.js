var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    firstname: String,
    lastname: String,
    pickup: String,
    pickup_lat: Number,
    pickup_lng: Number,
    dropoff: String,  
    dropoff_lat: Number,
    dropoff_lng: Number,
    date: String,
    date_calc: Number,
    time_disp: String, 
    time_calc: Number,
    phone: String
});

//MODELs
module.exports = mongoose.model('Request', requestSchema);