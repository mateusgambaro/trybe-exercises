const PESO = 98;
const ALTURA = 179;

function calculaIMC () {
  const peso = PESO;
  const altura = ALTURA;

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso /Math.pow(altura / 100, 2).toFixed(2));

  console.log(`IMC: ${imc}`);
}

calculaIMC();