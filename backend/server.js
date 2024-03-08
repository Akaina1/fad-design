const express = require('express');
const contactRoutes = require('./routes/contact');
const dotenv = require('dotenv');
const cors = require('cors'); 


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://faddesign.netlify.app'||'http://localhost:3000' , 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


app.use('/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});