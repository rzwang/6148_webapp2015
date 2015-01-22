var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    pickup: String,
    dropoff: String,
    // date: String, // change to Date later
    time: String, // change to Date later
    phone: String,
    results: Array
});

//MODELs
module.exports = mongoose.model('Request', requestSchema);