let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

for (index = 0; index < numbers.length; index += 1){
    console.log (numbers [index]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

let total = 0;

for (index = 0; index < numbers.length; index += 1){
    total += numbers[index];
}

console.log (total);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no arra

for (index = 0; index < numbers.length; index += 1){
    total += numbers[index];
}

let media = (total / 20);
console.log (media);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if(media > 20){
    console.log("valor maior que 20");
}
else {
    console.log ("valor menor ou igual a 20");
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o

for (index = 0; index < numbers.length; index +=1){
    let numMax = numbers.reduce(function(a,b){
        return Math.max(a,b);
    });

    console.log (numMax);
}

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

for (index = 0; index < numbers.length; index += 1){
    if(numbers [index] % 3 === 0){
     console.log("número é ímpar");
    }

    else if(numbers [index] % 2 === 0){
        console.log ("número é par");
    }
    
    }

    
