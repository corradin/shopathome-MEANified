const express = require('express');
const app = express();
const port = 7071;

app.get('/api/products', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
