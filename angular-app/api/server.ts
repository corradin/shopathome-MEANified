const express = require('express');
const app = express();
const port = 7071;

const productsMock = [{
  id: 1,
  name: 'Xbox Series X',
  description: 'The latest gen console',
  quantity: 1
}];

app.get('/api/products', (req, res) => {
  res.send(productsMock);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
