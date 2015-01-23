var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Request = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    pickup: String,
    pickup_loc: [Number],
    dropoff: String,
    dropoff_loc: [Number],
    date: String,
    time_disp: String,
    time_calc: Number,
    phone: String
});

module.exports = mongoose.model('Request', Request);
