const express = require('express');
const path = require('path');
const app = express();

// Handle root route FIRST (before static middleware)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'flipbook.html'));
});

// Serve static files from the current directory (but root is already handled above)
app.use(express.static(__dirname));

// Set proper MIME types
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.type('application/javascript');
  } else if (req.path.endsWith('.pdf')) {
    res.type('application/pdf');
  }
  next();
});

// Fallback to flipbook.html for any other routes
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.redirect('/flipbook.html');
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
