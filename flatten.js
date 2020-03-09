const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(arr) {
  let flattenedArray = [];

  for (element of arr) {
    if (Array.isArray(element)) {
      for (subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

module.exports = flatten;

// // Test cases
// assertArraysEqual(flatten([1, [2, 3], [4, 5, 6, 7], 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
// assertArraysEqual(flatten(["potato", [2, 3], [4, 5, 6, 7], 8]), ["potato", 2, 3, 4, 5, 6, 7, 8]);