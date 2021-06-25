let a = 35;
let b = 10;
let c = 20;

// Soma
let sum = (a + b);
console.log(sum);

// Subtração
let subtraction = (a - b);
console.log(subtraction);

// Divisão
let division = (a / b);
console.log(division);

// Multiplicação
let multiplication = (a * b);
console.log(multiplication);

// Módulo
let remainder = a % b;
console.log(remainder);

// 2.  Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function eMaior (a,b){

if(a>b){
    console.log("O maior número é ",a,"e o menor número é",b,"");
}
else if(a>b){
    console.log("O maior número é ",a," e o menor é ",b,"");
}
else if(b>a){
    console.log("O maior número é ",b," e o menor é ",a,"");
}
else if(b>a){
    console.log("O maior número é ",b," e o menor é ",a,"");
}

}

eMaior(a,b);

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.



function eMaiorTres (a,b,c){

    if(a>b && a>c){
        console.log("O maior número é ",a,"e o menor número é",b,"" || "O maior número é ",a,"e o menor número é",c,"" );
    }
    else if(a>b && a>c){
        console.log("O maior número é ",a," e o menor é ",b,"" || "O maior número é ",a,"e o menor número é",c,"");
    }
    else if(b>a && b>c){
        console.log("O maior número é ",b," e o menor é ",a,"" || "O maior número é ",b," e o menor é ",c,"");
    }
    else if(b>a && b>c){
        console.log("O maior número é ",b," e o menor é ",a,"" || "O maior número é ",b," e o menor é ",c,"");
    }
    
    }
    
    eMaiorTres (a,b,c);

    // 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

    let numero = 3;

    if (numero > 0){
        console.log("positive");
    }
    else if (numero < 0){
        console.log("negative");
    }
    else {
        console.log ("zero");
    }

    // 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

    let angulo1 = 90;
    let angulo2 = 60;
    let angulo3 = 20;
    let angulos = (angulo1 + angulo2 + angulo3);


    if(angulo1 > 0 && angulo2 >0 && angulo3 > 0 && angulos == 180){
        console.log(true);
    }
    else{
        console.log (false);
    }

    // 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    let pecaXadrez = "bispo";
    console.log(pecaXadrez);

    let bispo = "diagonal";

        switch (bispo){
            case "diagonal":
             console.log("segue!");
             break;

             case "reto":
              console.log ("erro!");
              break;
        }

    // 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

    let nota = 10;

    let notaA= nota >= 90;
    let notaB = nota >= 80;
    let notaC = nota >= 70;
    let notaD = nota >= 60;
    let notaE = nota >= 50;
    let notaF = nota < 50;

    if ((notaA) && (nota<=100)){
        console.log("A");
    }
    else if (notaB){
        console.log("B");
    }
    else if (notaC){
        console.log("C");
    }
    else if (notaD){
        console.log("D");
    }
    else if (notaE){
        console.log("E");
    }
    else if (notaF){
        console.log("F");
    }
    else{
        console.log("ERRO");
    }

    // 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

    let num1 = 1;
    let num2 = 4;
    let num3 = 4;

    if ((num1 % 2 == 0) || (num2 % 2 == 0) || (num3 % 2 == 0)){
        console.log(true);
    }
    else{
        console.log(false);
    }

    // 9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

    if ((num1 % 3 == 0) || (num2 % 3 == 0) || (num3 % 3 == 0)){
        console.log(true);
    }
    else{
        console.log(false);
    } 

    // 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

    let valorProduto = 1000;
    let valorVenda = 1400;

    let valorProdutoImposto = valorProduto * 0.2;
    let valorProdutoTotal = (valorProdutoImposto + valorProduto);
    let lucro = (valorVenda - valorProdutoTotal);

    if (valorVenda*1000 > 0){
        console.log(lucro*1000);
    }
    else{
        console.log("erro");
    }