const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

router.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

router.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


module.exports = router;