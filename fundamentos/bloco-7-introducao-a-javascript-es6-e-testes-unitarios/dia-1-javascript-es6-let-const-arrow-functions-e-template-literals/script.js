// Modifique a estrutura da função para que ela seja uma arrow function . 
// Modifique as concatenações para template literals .

/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);*/

  const testingScope = escopo => {
      if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
          console.log(ifScope)
      } else {
          const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'
          console.log(elseScope);
      }
  }

  testingScope(true);

  // Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
//Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort()

/*const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const crescentNumber = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

console.log(`Os números ${crescentNumber ()} se encontram ordenados de forma crescente! `); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

/*const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));*/

// ternary operator
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));



const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));