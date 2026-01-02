const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Vercel Express Server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Important: Export the app for Vercel's build process
module.exports = app;
