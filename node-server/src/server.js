const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
});

app.listen(port, () => {
  console.log(`Node.js server running on port ${port}`);
});