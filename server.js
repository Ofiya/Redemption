const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
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

// Redirect root to flipbook.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'flipbook.html'));
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
