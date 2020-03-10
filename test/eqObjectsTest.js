const assert = require("chai").assert;
const eqObjects = require("../eqObjectsRecursive");

describe("#eqObjects", () => {

  it("should return true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2}));
  });

  it("should return false for { a: { z: { m: 3 } }, b: 3 } and { a: { z: { m: 3 } } }", () => {
    assert.isFalse(eqObjects({ a: { z: { m: 3 } }, b: 3 }, { a: { z: { m: 3 } } }));
  });

  it("should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2}", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2}));
  });

  it("should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

});
