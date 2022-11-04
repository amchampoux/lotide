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

const sentenceA = 'LHL';
const sentenceB = 'househoo';
console.log(countLetters(sentenceA), {L: 2, H: 1});
console.log(countLetters(sentenceB));



