var flash = require('connect-flash');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// mongoose
// INCORPORATE DIFFERENT CONFIGURAIONS
var mongoose = require('mongoose');

// CONNECTS MONGOOSE TO LOCALHOST/PASSPORT
// mongoose.connect('mongdb://localhost/passport');

// CONNECT MONGOOSE TO MONGOLAB, SERVER DB
var uriUtil = require('mongodb-uri');  
var mongodbUri = 'mongodb://heroku_app33360347:ch4n9qs8keqcrtcnifsda7i6va@ds031671.mongolab.com:31671/heroku_app33360347';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport config
var passport = require('passport');
var expressSession = require('express-session');

app.use(expressSession({secret: 'maroon5fan123'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// passport init
var initPassport = require('./passport/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

// remove requests that are before current date
var delay = 24*60*60*1000; // one day in terms of milliseconds
var Request = require('/models/requestModel.js');
var User = require('/models/userModel.js');

function removeOldRequests() {
    var current = new Date()
    var currentDate = current.getMonth().toString() + current.getDate().toString() + (current.getFullYear() % 100).toString();
    // Request.find( {date: $lte: })
}

var deleteRequest = function (req, res) {
    if (req.user && req.user.hasReq.length !== 0) {
        Request.findByIdAndRemove(req.user.hasReq, function(err, deleted_request){});
        req.user.hasReq = "";
        req.user.save();
        res.redirect('/request');
    } else {
        res.redirect('/login');
    } 

setInterval(removeOldRequests, delay);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'));

module.exports = app;
