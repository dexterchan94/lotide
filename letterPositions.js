const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

// // Test cases
// assertArraysEqual(letterPositions("hello there").h, [0, 7]);
// assertArraysEqual(letterPositions("general kenobi").e, [1, 3, 9]);
