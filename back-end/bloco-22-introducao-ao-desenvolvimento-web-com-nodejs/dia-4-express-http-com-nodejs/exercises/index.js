/* index.js */
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const { name }  = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if( parseInt(age) > 17 ) {
    return res.status(200).json({'message': `Hello, ${name}! `})
  }
   res.status(401).json({'message': `Unauthorized`});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});