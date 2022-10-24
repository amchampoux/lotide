const assertArraysEqual = function(array1, array2) {

  for (i = 0; i< array1.length; i++) {
    for (j = 0; i<array2.length; j++) {
      if (array1[i] === array2[j]) {
        return `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
      } else {
        return `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
      }
    }
  }

}


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS