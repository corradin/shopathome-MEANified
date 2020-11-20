const express = require('express');
const app = express();
const port = 7071;
const data = require('./data');

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
