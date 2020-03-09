const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {

  it("should return [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

});
