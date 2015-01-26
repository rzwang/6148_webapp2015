var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/userModel');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use('update', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) { 
            User.findOne({ 'username' :  username }, 
                function(err, user) {
                    if (err) {
                        console.log('Error in update: '+err);
                        return done(err);
                    };
                    if (!isValidPassword(user, password)){
                        return done(null, false, req.flash( 'message', 'Invalid password' ));
                    } else {
                        console.log('updating');                        
                        user.firstname = req.param('firstname');
                        user.lastname = req.param('lastname');
                        user.phone = req.param('phone');

                        if (req.param('newpassword').value !== 0) {
                            user.password = createHash(req.param('newpassword'));
                        };

                        user.save(function(err) {
                            if (err) {
                                console.log('Error in updating user: '+err);  
                                throw err;
                            };
                            return done(null, user, req.flash( 'message', 'Welcome, '+user.firstname ));
                        });
                    };
                }
            );
        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };
};
