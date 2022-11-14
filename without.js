const without = function(array, itemsToRemove) {
  array = array.filter((item) => !itemsToRemove.includes(item));
  return array;
};

module.exports = without;