const eqArrays = function(array1, array2) {
  for (i = 0; i< array1.length; i++) {
    for (j = 0; j<array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2) === true) {
      return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }  
  }

const flatten = function(array) {

  let output = [];
  
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) { 
      for (j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      } 
    } else {
      output.push(array[i]);
    }  
  }
  return output;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual([1, 2, [3, 4], 5, [6]], [1, 2, 3, 4, 5, 6]);
