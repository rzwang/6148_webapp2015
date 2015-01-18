var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, email, password, done) { 
            User.findOne({ 'email' :  email }, 
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        console.log('User not found with email '+email);
                        return done(null, false, { message: 'User not found with email '+email });
                    }
                    if (!isValidPassword(user, password)){
                        console.log('Invalid password');
                        return done(null, false, { message: 'Invalid password' });
                    }
                    return done(null, user);
                }
            );

        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
    
}
