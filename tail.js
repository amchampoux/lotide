const assertEqual = require('./assertEqual');

const tail = function(array) {

  return array.slice(1);

};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const testA = [];
const testB = [1];
const testC = [1, 2, 3];

console.log(tail(testA));
console.log(tail(testB));
console.log(tail(testC));