// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]);

// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha

// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

//--------CALLBACK-------------

// const myExpenses = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const myIncome = 1000;
  
//   const monthlyBudget = (myIncome, myExpenses, callback) => {
//     const totalExpenses = callback(myExpenses);
//     const totalAfterExpenses = myIncome - totalExpenses;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${myIncome},00
//       Gasto: R$${totalExpenses},00
//       Saldo: R$${totalAfterExpenses},00 `);
//   };
  
//   const handleExpenses = myExpenses => {
//     const eachValue = myExpenses.map((item => Object.values(item)));
//     const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0] , 0);
//     return totalExpense;
//   };
  
//   monthlyBudget(myIncome, myExpenses, handleExpenses);

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = callback => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser
  