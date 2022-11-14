const countLetters = function(sentence) {
  let count = {};
  for (let char of sentence) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

module.exports = countLetters;






