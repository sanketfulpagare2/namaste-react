const express = require('express');
const axios = require('axios');
const serverless = require('serverless-http');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/restaurants', async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5', {
      params: {
        lat: lat,
        lng: lng,
        'is-seo-homepage-enabled': true,
        page_type: 'DESKTOP_WEB_LISTING'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Swiggy API' });
  }
});

module.exports = app;
module.exports.handler = serverless(app);
