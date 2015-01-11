var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '6.148 Web Application' });
});

router.get('/login', function(req, res){
    res.render('login', {title: 'Login'});
});

router.get('/signup', function(req, res){
    res.render('signup', {title: 'Sign Up'});
});

router.get('/request_match', function(req, res){
    res.render('requrest_match', {title: 'Request Match'});
});

router.get('/results', function(req, res){
    res.render('results', {title: 'Results'});
});

module.exports = router;
