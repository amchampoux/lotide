




const assertEqual = function(actual, expected) {


  console.assert(actual !== expected, `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  console.assert(actual === expected, `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);


};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 4);