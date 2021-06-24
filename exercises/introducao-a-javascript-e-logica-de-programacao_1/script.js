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
    
