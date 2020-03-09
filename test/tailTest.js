const tail = require("../tail");
const assert = require("chai").assert;

describe ("#tail", () => {

  it("should return [6, 7, 8] for [5, 6, 7, 8]", () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]);
  });

  it("should return [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("should return [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should return a length of 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

});
