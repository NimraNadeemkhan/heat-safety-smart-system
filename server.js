// server.js (Node/Express Backend)

const express = require('express');
const path = require('path'); // IMPORTANT: Corrected the typo 'require' to 'path'
const app = express();

// RENDER FIX 1: Use the environment port provided by Render (process.env.PORT)
// Fallback to 3000 for local development.
const PORT = process.env.PORT || 3000;

// RENDER FIX 2: Set the root directory to serve static files (HTML, JS, CSS)
// This tells Express to find files like index.html directly in the root, 
// matching your current GitHub file structure.
app.use(express.static(__dirname));

// Fallback for the root path: serves index.html
app.get('/', (req, res) => {
  // RENDER FIX 3: Removed 'public' from the path.
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Digital Twin Server running on port ${PORT}`);
  console.log('Serving files from: Root Directory');
});
