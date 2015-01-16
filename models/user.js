var mongoose = require('mongoose');

//SCHEMA
var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    phone: String
});

//MODEL
var User = mongoose.model('User', userSchema);

//Export
module.exports = User;