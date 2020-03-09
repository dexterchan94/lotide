const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, value) {
  for (key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;

// // Test cases
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   cop_show:  "Brooklyn Nine-Nine"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);