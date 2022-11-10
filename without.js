const without = function(array, itemsToRemove) {

  let output = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {

      if (array[i] === itemsToRemove[j]) {
        i++;
      }
      if (i === array.length) {
        return output;
      }
    }
    output.push(array[i]);
  }
  return output;
};

module.exports = without;