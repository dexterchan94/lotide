const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

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

// module.exports = eqObjects;

// // Test cases
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

