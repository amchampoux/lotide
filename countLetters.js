const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};

const countLetters = function(sentence) {

  let count = {};

  for (char of sentence) {

    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  return count;

}

const sentenceA = 'LHL';
const sentenceB = 'househoo';
console.log(countLetters(sentenceA));
console.log(countLetters(sentenceB));

// assert equal call
// var actual = countLetters(sentenceA);
// console.log(actual);

