/* function promiseONE (num1, num2, num3) {
  
  return new Promise((resolve, reject) => {

    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
    reject('Informe apenas números');

    const resultado = (num1 + num2) * num3;

    if(resultado > 50) {
      return reject('Valor muito baixo')
    }
    resolve(resultado);
  })
}

promiseONE(10,10,10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

promiseONE(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

promiseONE(1, 1, 1)
  .then(resolve => console.log(resolve))

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {

  const randomNumbers = Array.from({length: 3}).map(getRandomNumber());

    try {
    const result = await promiseONE(...randomNumbers);
    console.log(result);
    }
    catch(err) {
      console.log(err);
    }
} */

const fs = require('fs').promises;

/* fs.readFile('./simpsons.json', 'utf8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({id, name}) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });
 */
  
async function getSimpsonsById(id) {
  const simpsons = await 
  fs.readFile('./simpsons.json', 'utf8')
  .then((content) => JSON.parse(content));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if(!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}
getSimpsonsById('5')
.then(resolve => console.log(resolve))
.catch(err => console.log(err.message))