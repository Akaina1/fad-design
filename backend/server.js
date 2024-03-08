const express = require('express');
const contactRoutes = require('./routes/contact');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors middleware


dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Include credentials in CORS headers (if needed)
}));

// Use contactRoutes for handling contact-related routes
app.use('/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});