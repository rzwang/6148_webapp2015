var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Request = new Schema({
    id: String,
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
    time: String,
    time_calc: Number,
    phone: String
});

module.exports = mongoose.model('Request', Request);
