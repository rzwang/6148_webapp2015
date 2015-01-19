var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id: String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    phone: String,
    hasrequests: Boolean
});

module.exports = mongoose.model('User', User);
