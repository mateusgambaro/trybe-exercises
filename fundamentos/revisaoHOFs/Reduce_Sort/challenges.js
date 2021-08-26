// ------------------REDUCE----------------

const { shopCart } = require('./data');
const { passengers } = require('./data');

// 1. Qual o valor total do carrinho de compras

// const totalValue = shopCart.reduce((accumulator, item) => 
//     accumulator + item.quantity * item.unitPrice, 0
// );

// console.log(totalValue);

// 2. Quantidade total de produtos do carrinho

const totalQuantityItems = shopCart.reduce((accumulator, item) => 
    accumulator + item.quantity, 0
);

console.log(totalQuantityItems);

// ------------------SORT----------------

// 1. Organize o carrinho do maior número de produtos para o menor

const orderByProducts = shopCart.sort(( a , b) => b.quantity -a.quantity);
console.table(orderByProducts);

// 2. Organize os passageiros por nome

const passengersOrderedByName = passengers.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase())
    return -1;
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase())
    return 1;
    return 0;
});

console.table(passengersOrderedByName);