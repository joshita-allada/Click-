/*const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const fetch = require('node-fetch');

const app = express();

app.post('/upload', async (req, res) => {
    try {
      const cloudinaryUrl = '/upload';
      const cloudinaryResponse = await fetch(cloudinaryUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required headers for the Cloudinary API (e.g., authorization)
        },
        body: JSON.stringify(req.body), // Forward the request body to Cloudinary
      });
  
      const cloudinaryData = await cloudinaryResponse.json();
      res.json(cloudinaryData); // Forward the Cloudinary response back to the frontend
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  
  */