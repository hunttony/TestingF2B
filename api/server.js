const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Explicitly handle /api/hello
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Vercel serverless function!' });
});

// Prevent serving api folder as static files
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

app.listen(port, () => {
  console.log(`Local server running at http://localhost:${port}`);
});