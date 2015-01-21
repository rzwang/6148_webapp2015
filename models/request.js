var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Request = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    pickup: String,
    dropoff: String,
    date: String,
    time: String,
    phone: String,
    results: Array
});

module.exports = mongoose.model('Request', Request);
