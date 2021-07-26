/*const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  const customerInfo = (order) => {
    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order['name'];
    const customerPhone = order['phoneNumber'];
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
  
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  }
  
  customerInfo(order);


const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const newTotal = order.payment.total = '50,00';
  
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal}`);
  }
  
  orderModifier(order);*/

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  const newKey = (obj, key, value) => {
    obj[key] = value;
  };
  
  newKey(lesson2, 'turno', 'manhã');

  console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({ lesson1, lesson2, lesson3 });

console.log(allLessons);

