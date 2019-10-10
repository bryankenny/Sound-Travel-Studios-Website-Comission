var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/news', function(req, res, next) {
  res.render('news');
});

router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Testing Page' });
});


module.exports = router;
