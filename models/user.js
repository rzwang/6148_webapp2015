var mongoose = require('mongoose');

//SCHEMA
var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    phone: String
});

//MODEL
module.exports = mongoose.model('User', userSchema);

//Export
// module.exports = User;