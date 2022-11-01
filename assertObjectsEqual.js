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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let obj of Object.keys(object1)) {
    if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
      let output = eqArrays(object1[obj], object2[obj]);
      return output;
      
    } else {
      if (object1[obj] !== object2[obj]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {

  const inspect = require('util').inspect;

  if (eqObjects(object1, object2) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
