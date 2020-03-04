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

// Test cases
assertArraysEqual(letterPositions("hello there").h, [0, 7]);
assertArraysEqual(letterPositions("general kenobi").e, [1, 3, 9]);
