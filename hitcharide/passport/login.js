var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) { 
            User.findOne({ 'username' :  username }, 
                function(err, user) {
                    if (err) {
                        console.log('Error in login: '+err);
                        return done(err);
                    };
                    if (!user) {
                        return done(null, false, req.flash( 'message', 'User not found with username: '+username ));
                    };
                    if (!isValidPassword(user, password)){
                        return done(null, false, req.flash( 'message', 'Invalid password' ));
                    };
                    return done(null, user);
                }
            );
        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
    
}