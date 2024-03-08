const express = require('express');
const contactRoutes = require('./routes/contact');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Use contactRoutes for handling contact-related routes
app.use('/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});