const { childrenAge } = require("./data");
const { mailList } = require("./data");

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

