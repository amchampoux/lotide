const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]);
assertEqual(words, ["Yo Yo", "Lighthouse", "Labs"]); // original array should still have 3 elements!

const testA = [];
const testB = [1];
const testC = [1, 2, 3];

assertEqual(tail(testA), []);
assertEqual(tail(testB), []);
assertEqual(tail(testC), [2, 3]);