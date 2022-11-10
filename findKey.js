const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {

  for (let key in object) {

    if (callback(object[key]) === true) {
      return key;
    }
  }
};

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const results1 = findKey(data, x => x.stars === 2);
const results2 = findKey(data, x => x.stars === 3);
const results3 = findKey(data, x => x.stars === 1);

assertEqual(results1, "noma");
assertEqual(results2, "Akaleri");
assertEqual(results3, "Blue Hill");

module.exports = findKey;

















