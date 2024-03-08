const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

router.post('/send-email', (req, res) => {
  const { name, email, subject, body } = req.body;

  const mailOptions = {
    from: email, // Use the user's provided email as the sender
    to: process.env.EMAIL_USERNAME, // Replace with your email address
    subject: subject || 'New Contact Form Submission', // Use provided subject or a default value
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${body}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

module.exports = router;