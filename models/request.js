var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Request = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    pickup: String,
    dropoff: String,
    time: String, // CHANGE THIS TO Date LATER
    phone: String
});

module.exports = mongoose.model('Request', Request);
