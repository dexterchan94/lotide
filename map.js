const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`"✅ Assertion Passed: ${array1} === ${array2}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${array1} !== ${array2}"`);
  }
};



const map = function(arr, callback) {
  let results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

// Test cases
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word + " potato"), ["ground potato", "control potato", "to potato", "major potato", "tom potato"]);
assertArraysEqual(map(numbers, num => num * 2), [2, 4, 6, 8, 10]);