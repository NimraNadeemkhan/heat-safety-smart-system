// server.js (Node/Express Backend)

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up the 'public' directory to serve static files (HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for the root path: serves index.html
app.get('/', (req, res) => {
  // The client-side code handles all data fetching and rendering, 
  // so we just serve the main file.
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Digital Twin Server running at http://localhost:${port}`);
  console.log('Serving files from: /public');
});