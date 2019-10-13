const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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
  console.log(req.body.email);
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          // should be replaced with real sender's account
          user: 'soundtravelstudiovancouver@gmail.com',
          pass: 'SoundTravVan123'
      }
  });
  let mailOptions = {
      // should be replaced with real recipient's account
      to: 'soundtravelstudiovancouver@gmail.com',
      subject: req.body.subject,
      body: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.writeHead(301, { Location: 'contact.ejs' });
  res.end();
})


module.exports = router;
