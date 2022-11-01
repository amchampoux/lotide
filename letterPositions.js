const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  if (array1.length === 0 && array2.length === 0) {
    return true;
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

const letterPositions = function(sentence) {
  
  let results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
  
};

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);