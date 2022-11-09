const middle = function(array) {

  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
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
};

module.exports = middle;