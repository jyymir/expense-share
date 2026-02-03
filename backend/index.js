const express = require('express');
const supabase = require('./supabaseClient');
require('dotenv').config();

const app = express();
app.use(express.json()); // Allows your server to read JSON sent by Person B

const PORT = process.env.PORT || 3000;

// A simple test route
app.get('/', (req, res) => {
  res.send('Backend is alive! 🚀');
});

app.post('/register', async(req, res) => {
  const { email, password } = req.body;
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});