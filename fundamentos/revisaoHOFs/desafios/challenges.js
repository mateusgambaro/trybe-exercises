// 1. Adicione o ano de nascimento das crianças para cada elemento do array

const { childrenAge, mailList, shopCart } = require("./data");

const children = childrenAge.map(child => {
    return {
        age: child,
        birthYear: 2021 - child
    };
});

console.table(children);

// 2. Crie um array somente com os domínios da lista de email

const domains = mailList.map(mail => {
    const mailsArray = mail.split("@");
    return mailsArray[1];
});

console.table(domains);

// 3. Encontre o maior preço dos produtos abaixo de 100 reais

const below100 = shopCart
    .filter(product => product.unitPrice <= 100)
    .reduce(
        (lastProduct, currentProduct) => {
            if(lastProduct > currentProduct.unitPrice) return lastProduct;

            return currentProduct.unitPrice
        },
        0
    );

    console.table(below100);