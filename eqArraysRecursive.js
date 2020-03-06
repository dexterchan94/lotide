const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"✅ Assertion Passed: ${actual} === ${expected}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${actual} !== ${expected}"`);
  }
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (Array.isArray(array1[index]) && Array.isArray(array2[index])) {
      if (!eqArrays(array1[index], array2[index])) {
        return false;
      }
    } else if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
};


// Test cases
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[[2], 3], [4]], [[[2], 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false