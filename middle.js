const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {

  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return output;
    } else if (array.length % 2 !== 0) {
      output.push(array[Math.floor(array.length / 2)]);
      return output;
    } else if (array.length % 2 === 0) {
      output.push(array[Math.floor((array.length - 1) / 2)]);
      output.push(array[Math.floor((array.length) / 2)]);
      return output;
    }
  }
};

console.log(middle([1])); // => []
assertArraysEqual(middle([1, 2]), []);// => []

console.log(middle([1, 2, 3])); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]