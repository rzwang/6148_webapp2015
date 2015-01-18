var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: String,
    fullname: String,
    email: String,
    password: String,
    phone: String
});

//MODEL
module.exports = mongoose.model('User', userSchema);

//Export
// module.exports = User;