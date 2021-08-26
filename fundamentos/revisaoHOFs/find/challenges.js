const { childrenAge } = require("./data");
const { mailList } = require("./data");
const { passengers } = require("./data");

// ---------------FILTER------------------

// 1. Crianças entre 2 - 11 anos

// function childrenAge2to11(element, index, array) {
//     if (element >= 2 && element <= 11) 
//     return true;

//     return false;
// }

// const childrenFiltered = childrenAge.filter(childrenAge2to11);

// console.table(childrenFiltered);

// 1. Código refatorado 

const childrenFiltered = childrenAge.filter(element => 
    element >= 2 && element <= 11
);

console.table(childrenFiltered);

// 2. Emails casaterra.com

// let filteredEmailsCasaterra = [];

// for (let index = 0; index < mailList.length; index ++) {
//     if(mailList[index].includes("@casaterra.com")) {
//         filteredEmailsCasaterra.push(mailList[index]);
//     }
// }

// console.table(filteredEmailsCasaterra);

// 2. Código refatorado

const filteredEmailsCasaterra = mailList.filter(mail => mail.includes("@casaterra.com"));

console.log(filteredEmailsCasaterra);

// ---------------FIND------------------

// 1. Encontre o passageiro de nome: "Enzo"

const enzo = passengers.find(passanger => passanger.name.toLowerCase() === "enzo");

console.table(enzo);

// 2. Alguém que nasceu em 2015

const birthYear1984 = passengers.find(passanger => passanger.birthYear === 1984);

console.table(birthYear1984);