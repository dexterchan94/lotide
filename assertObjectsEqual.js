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

const eqObjects = function(object1, object2) {
  for (key in object1) {
    if (object1[key] !== object2[key]) {
      if ((!Array.isArray(object1[key]) && !Array.isArray(object2[key]))) {
        return false;
      } else if ((!Array.isArray(object1[key]) || !Array.isArray(object2[key]))) {
        return false;
      } else if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }

  for (key in object2) {
    if (object1[key] !== object2[key]) {
      if ((!Array.isArray(object1[key]) && !Array.isArray(object2[key]))) {
        return false;
      } else if ((!Array.isArray(object1[key]) || !Array.isArray(object2[key]))) {
        return false;
      } else if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`"✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}"`);
  }
};

// Test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
