var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Request = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phone: String
});

module.exports = mongoose.model('Request', Request);
