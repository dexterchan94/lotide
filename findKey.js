const assertEqual = require("./assertEqual");


const findKey = function(obj, callback) {
  let allKeys = Object.keys(obj);
  for (key of allKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// // Test cases
// const testObject = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// assertEqual(findKey(testObject, x => x.stars === 2), "noma");
// assertEqual(findKey(testObject, x => x.stars === 1), "Blue Hill");
// assertEqual(findKey(testObject, x => x.stars === 3), "Akaleri");
// assertEqual(findKey(testObject, x => x.stars === 4), undefined);