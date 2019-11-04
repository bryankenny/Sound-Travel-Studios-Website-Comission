const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const bodyParser = require('body-parser');

// OAuth2 information
const oauth2Client = new OAuth2(
     "739705801404-4j2jq52ln72f0c0c1hja46s892siuhc6.apps.googleusercontent.com",
     "qIliyCcBqRMH7_KKDBpVoar9",
     "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
     refresh_token: "1//044wmb0IwcMCJCgYIARAAGAQSNwF-L9Ir0EFK1V-D4z8MAOic7PVwU2TmswYJ8LsH35A9wodmxit57QpKZu6019XsDIsDCLpC1kk"
});
const accessToken = oauth2Client.getAccessToken()

// GET routes
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

router.get('/artistPage', function(req, res) {
    res.render('artistPage', { title: 'Teja Sangha Voice Acting' });
});

//nodemailer
router.post('/sendEmail', function(req, res) {
  console.log('yo');
  console.log(req.body.email);
  let transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "soundtravelstudiovancouver@gmail.com",
          clientId: "739705801404-4j2jq52ln72f0c0c1hja46s892siuhc6.apps.googleusercontent.com",
          clientSecret: "qIliyCcBqRMH7_KKDBpVoar9",
          refreshToken: "1//044wmb0IwcMCJCgYIARAAGAQSNwF-L9Ir0EFK1V-D4z8MAOic7PVwU2TmswYJ8LsH35A9wodmxit57QpKZu6019XsDIsDCLpC1kk",
          accessToken: accessToken
     }
  });
  let emailSender = req.body.email;
  let mailOptions = {
      from: req.body.email,
      to: 'soundtravelstudiovancouver@gmail.com',
      subject: req.body.subject,
      html: req.body.message,
      sender: req.body.email,
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.render('index');
})


module.exports = router;
