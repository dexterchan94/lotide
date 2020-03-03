const assertArraysEqual = function(array1, array2) {
  let isEqual = true;
  if (array1.length !== array2.length) {
    isEqual = false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isEqual = false;
    }
  }

  if (isEqual === true) {
    console.log(`"✅ Assertion Passed: ${array1} === ${array2}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${array1} !== ${array2}"`);
  }
}

// // Test cases
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);