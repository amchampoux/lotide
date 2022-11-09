const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "4", "3"], ["1", "2", "3"]), false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const cd =  ["2", 3];
const cd2 = ["2", 3, 4];
assertEqual(eqArrays(cd, cd2), false); // => false