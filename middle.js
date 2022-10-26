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


const middle = function(array) {

  let output = [];

  for (i = 0; i < array.length; i++) {
    if (array.length <=2) {
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
}

console.log(middle([1])); // => []
assertArraysEqual([1, 2], []);// => []

console.log(middle([1, 2, 3])); // => [2]
assertArraysEqual([1, 2, 3, 4, 5], [3]); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual([1, 2, 3, 4, 5, 6], [3, 4]); // => [3, 4]