var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            findOrCreateUser = function(){
                User.findOne({ 'username' :  username }, function(err, user) {
                    if (err){
                        console.log('Error in signup: '+err);
                        return done(err);
                    }
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false, { message: 'User already exists with username: '+username });
                    } else {
                        var newUser = new User();

                        newUser.firstname = req.param('firstname');
                        newUser.lastname = req.param('lastname');
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.phone = req.param('phone');
                        newUser.hasrequests = false;

                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);  
                                throw err;  
                            }
                            console.log('User Registration succesful');    
                            return done(null, newUser);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}
