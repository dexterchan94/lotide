const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 4], [1, 2, "3"]), false);
assertEqual(eqArrays([1], [1]), true);