/*const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4,5), 9, 'Soma deve ser igual a 9');
assert.strictEqual(sum(0,0), 0, 'Soma deve ser igual a 0');
assert.throws(() => {
    sum(4,'5');
});
assert.throws(() => {
    sum(4,'5');
}, /^Error: parameters must be numbers$/);*/

/*const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const expected = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove(expected, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(expected, 3), expected);

const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove(expected, 5), expected);*/

/*const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

const expected = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

myRemoveWithoutCopy(expected, 1);
assert.strictEqual(expected, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);*/

/*const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Retorno deve ser 0');
assert.strictEqual(myFizzBuzz(3), 'fizz', 'Retorno deve ser 0');
assert.strictEqual(myFizzBuzz(5), 'buzz', 'Retorno deve ser 0');
assert.strictEqual(myFizzBuzz(22), 22, 'Retorno deve ser 0');
assert.strictEqual(myFizzBuzz('test'),false, 'Deve ser um número');*/

/*const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);*/

const assert = require('assert');

// escreva a função addOne aqui

const addOne = (array) => {
    const output = [];
    for (let index = 0; index < array.length; index += 1) {
      output.push(array[index] + 1);
    }
    return output;
  };

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
