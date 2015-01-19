var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    // pickupLat: Number,
    // pickupLong: Number,
    // dropoffLat: Number,
    // dropoffLong: Number, 
    pickup: String,
    dropoff: String,
    time: String, // change to Date later
    phone: String
});

//MODEL
module.exports = mongoose.model('Request', requestSchema);