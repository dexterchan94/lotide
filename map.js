const eqArrays = require("./eqArraysRecursive");
const assertArraysEqual = require("./assertArraysEqual");

const map = function(arr, callback) {
  let results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// // Test cases
// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4, 5];

// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
// assertArraysEqual(map(words, word => word + " potato"), ["ground potato", "control potato", "to potato", "major potato", "tom potato"]);
// assertArraysEqual(map(numbers, num => num * 2), [2, 4, 6, 8, 10]);