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

module.exports = eqArrays;