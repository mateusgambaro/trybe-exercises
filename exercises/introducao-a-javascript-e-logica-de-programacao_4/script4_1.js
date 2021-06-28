// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let nomes = "arara";

function verificaPalindrome (nomes){

    for(index = 0; index < nomes.length/2; index ++){
        if (nomes[index] !== nomes[nomes.length - 1 - index]){
            return false;
        }

        else{
            return true;
        }
    }
}

console.log(verificaPalindrome(nomes));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTest = [2, 3, 96, 7, 10, 1];

function maxNumber(arrayTest){

let maior = [];
let indice = 0;

for (let i = 1; i < arrayTest.length; i++){
    if(arrayTest[i]>maior){
        maior = arrayTest[i];
        indice = i;
    }
}

return indice;

}



console.log(maxNumber(arrayTest));