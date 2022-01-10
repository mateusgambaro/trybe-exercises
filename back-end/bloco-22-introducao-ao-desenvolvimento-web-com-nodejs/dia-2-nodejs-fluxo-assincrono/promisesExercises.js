function promiseONE (num1, num2, num3) {
  
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
  .catch(error => console.log(error))