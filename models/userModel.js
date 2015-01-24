var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    phone: String,
    // hasReq: String // change name of hasReq
    hasReq: [Boolean, String] 
});

module.exports = mongoose.model('User', User);
