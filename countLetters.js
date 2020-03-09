const assertEqual = require("./assertEqual");

const countLetters = function(str) {
  let results = {};

  let lowerCaseStr = str.toLowerCase();
  
  for (letter of lowerCaseStr) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  
  return results;
};

module.exports = countLetters;

// let result1 = countLetters("Potato pie");

// assertEqual(result1["p"], 2);