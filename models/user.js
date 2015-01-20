var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    phone: String,
    hasReq: Boolean
});

module.exports = mongoose.model('User', User);
