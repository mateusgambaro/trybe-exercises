/* index.js */
const express = require('express');
const app = express();

const message = [
  { message: 'pong' }
];

app.get('/ping', function (req, res) {
  res.json(message);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});