const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const deadline = new Date('31 Dec, 2026');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Vercel Express Server!');
});

app.get('/api/deadline', (req, res) => {
  res.send({
    secondsLeft: Math.round((deadline.getTime() - new Date(Date.now()).getTime()) / 1000),
    milliSecondsLeft: deadline.getTime() - new Date(Date.now()).getTime(),
    deadline: deadline.toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Important: Export the app for Vercel's build process
module.exports = app;
