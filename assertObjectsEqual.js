const eqObjects = require("./eqObjectsRecursive");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`"✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}"`);
  }
};

module.exports = assertObjectsEqual;

// // Test cases
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);
