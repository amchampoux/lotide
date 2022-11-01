const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        i++;
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
};

const without = function(array, itemsToRemove) {

  let output = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {

      if (array[i] === itemsToRemove[j]) {
        i++;
      }
    }
    output.push(array[i]);
  }
  return output;
};


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without([1, 2, 3, 4, 5, 6], [2, 6])); // => [1, 3, 4, 5]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);