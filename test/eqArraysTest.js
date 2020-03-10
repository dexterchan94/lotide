const eqArrays = require("../eqArraysRecursive");
const assert = require("chai").assert;

describe("#eqArrays", () => {

  it("should return true for [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return true for [[[2], 3], [4]] and [[[2], 3], [4]]", () => {
    assert.isTrue(eqArrays([[[2], 3], [4]], [[[2], 3], [4]]));
  });

  it("should return false for [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it("should return false for [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

});

