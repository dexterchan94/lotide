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

// Test cases
assertArraysEqual(flatten([1, [2, 3], [4, 5, 6, 7], 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
assertArraysEqual(flatten(["potato", [2, 3], [4, 5, 6, 7], 8]), ["potato", 2, 3, 4, 5, 6, 7, 8]);