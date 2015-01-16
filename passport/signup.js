var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

// Registration/Sign Up strategy
module.exports = function(passport){

    passport.use('signup', new LocalStrategy({
        passReqToCallback: true
    },
    function(req, username, password, done){
        
        findOrCreateUser = function(){
            console.log('called findOrCreateUser YAY');
            // find a user in Mongo with provided username
            User.findOne({'username' : username}, function(err, user){
                // In case of error 
                if (err){
                    console.log('Error in SignUp: ' + err);
                    return done(err);
                }

                // username already exists
                if (user){
                    console.log('User already exists');
                    return done(null, false, req.flash('message', 'User Already Exists'));
                } else {
                    // if there is no user with that email
                    // create the user
                    var newUser = new User();

                    // set the user's local credentials
                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.firstname = req.param('firstname');
                    newUser.lastname = req.param('lastname');
                    newUser.phone = req.param('phone');

                    // save the user
                    newUser.save(function(err){
                        if (err){
                            console.log('Error in saving user:' + err);
                            throw err;
                        }
                        console.log('User Registration successful');
                        return done(null, newUser);
                    });
                }
            });
        };
        // DO WE NEED THIS?
        // Delay the execution of findOrCreateUser and execute the method
        // in the next tick of the event loop
        process.nextTick(findOrCreateUser);
    }));

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
};

// Export
// module.exports = signup;