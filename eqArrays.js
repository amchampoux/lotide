const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        i++
      } else {
        return false;
      }     
    }   
    return true;
  } 
};


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "4", "3"], ["1", "2", "3"]), false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const cd =  ["2", 3];
const cd2 = ["2", 3, 4];
assertEqual(eqArrays(cd, cd2), false); // => false