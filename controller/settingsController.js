var Request = require('../models/requestModel.js');

var updateUser = function(req, res){
    req.user.firstname = req.param('firstname');
    req.user.lastname = req.param('lastname');
    req.user.password = createHash(password);
    req.user.phone = req.param('phone');

    req.user.save(function(err) {
        if (err){
            console.log('Error in updating user: '+ err);  
            throw err;  
        } 
        else {
            res.render('/', req.flash("User successfully updated"));
        }   
    });
}

module.exports = [
    updateUser
];
