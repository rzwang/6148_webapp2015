var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id: String,
    fullname: String,
    email: String,
    password: String,
    phone: String
});

module.exports = mongoose.model('User', User);
