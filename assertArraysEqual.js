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

const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2) === true) {
      return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }  
  }

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

