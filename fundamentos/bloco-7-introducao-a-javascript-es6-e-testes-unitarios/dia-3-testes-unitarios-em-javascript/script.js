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

/*const assert = require('assert');

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
assert.deepStrictEqual(myArray, unchanged);*/

/*const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
    const output = [];
    for (let index = 0; index < array.length; index += 1) {
      output.push(array[index].length);
    }
    return output;
  };

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);*/

/*const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (array) => {
    let output = 0;

    for (const item of array) {
        output += item;
    }

    return output;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);*/

const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (array, word) => {
    let output = -1;
    for (const index in array) {
      if (word === array[index]) {
        output = Number(index);
      }
    }
    return output;
  };

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
