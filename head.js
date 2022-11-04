const assertEqual = require('./assertEqual');

const head = function(array) {

  return array[0];

};

assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head([5,6,7]), 6);
console.log(head(["Hello", "Lighthouse", "Labs"]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
