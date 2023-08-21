const express = require('express');
const axios = require('axios');

const app = express();

// Set up CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your allowed origins
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const targetUrl = 'https://feeds.pinboard.in/json/v1/u:kwon/';

app.get('/data', async (req, res) => {
  try {
    const response = await axios.get(targetUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching JSON data:', error.message);
    res.status(500).json({ error: 'Error fetching JSON data' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
