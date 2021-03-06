const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// Create a static website
app.use(express.static(__dirname + "/dist/"));

// Capture all requests (SPA routes) and send to index.html
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);
