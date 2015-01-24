var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    firstname: String,
    lastname: String,
    pickup: String,
    pickup_loc: [Number], 
    dropoff: String,
    dropoff_loc: [Number],
    date: String,
    time_disp: String, 
    time_calc: Number,
    phone: String,
    results: Array
});

//MODELs
module.exports = mongoose.model('Request', requestSchema);