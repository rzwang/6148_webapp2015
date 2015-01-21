var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    pickup: String,
    dropoff: String,
    time: String, // change to Date later
    phone: String,
    results: []
});

//MODELs
module.exports = mongoose.model('Request', requestSchema);