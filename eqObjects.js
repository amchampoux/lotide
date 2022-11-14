const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

