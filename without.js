const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let returnValues = [];

  for (let i = 0; i < source.length; i++) {
    isSame = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isSame = true;
      }
    }
    if (!isSame) {
      returnValues.push(source[i]);
    }
  }

  return returnValues;
}

module.exports = without;

// // Test cases
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["apple", "orange", "banana"], [1, 2, "orange"]), ["apple", "banana"]);
// assertArraysEqual(without([1, "2", "3"], [false]), [1, "2", "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);