const { passengers } = require("./data");

// --------------FOREACH--------------

// 1. Adicione a idade (age) para cada pessoa

passengers.forEach(passenger => {
    passenger.age = 2021 - passenger.birthYear
});

console.table(passengers);

// --------------MAP--------------

// 2. Retorne quantos anos tem cada passageiro

const passengersAges = passengers.map(passenger => {
    return `${passenger.name} tem ${2021 - passenger.birthYear} anos`
});

console.table(passengersAges);

// 3. Encontre o nome palíndromo

const palindromeName = passengers.map(passenger => {
    const reverseName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join('');

    if(reverseName.toLowerCase() === passenger.name.toLowerCase()) 
        return `This is a palindrome: ${passenger.name}`
    
});

console.table(palindromeName);