const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), words); // => false
assertArraysEqual(map([], word => word[0]), []); // => true
assertArraysEqual(map(['10', '20', '30'], word => word[0]),['10', '20', '30']); // => false