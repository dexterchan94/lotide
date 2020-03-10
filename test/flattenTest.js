const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {

  it("should return [1, 2, 3, 4, 5, 6, 7, 8] for [1, [2, 3], [4, 5, 6, 7,], 8]", () => {
    assert.deepEqual(flatten([1, [2, 3], [4, 5, 6, 7], 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should return ['potato', 2, 3, 4, 5, 6, 7, 8] for ['potato', [2, 3], [4, 5, 6, 7], 8]", () => {
    assert.deepEqual(flatten(['potato', [2, 3], [4, 5, 6, 7], 8]), ['potato', 2, 3, 4, 5, 6, 7, 8]);
  });

});

