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

const assert = require('assert');

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

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);


