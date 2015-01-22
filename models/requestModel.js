var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    pickup: String,
    pickup_loc: String, 
    dropoff: String,
    dropoff_loc: String,
    date: String,
    time_disp: String, 
    time_calc: Number,
    phone: String,
    results: Array
});

//MODELs
module.exports = mongoose.model('Request', requestSchema);