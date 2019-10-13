const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


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

router.post('/sendEmail', function(req, res) {
  console.log('yo');
  res.render('contact');
})


module.exports = router;
