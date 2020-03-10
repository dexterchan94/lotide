const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {

  it("should return [0, 7] for 'hello there'", () => {
    assert.deepEqual(letterPositions("hello there").h, [0, 7]);
  });

  it("should return [1, 3, 9] for 'general kenobi'", () => {
    assert.deepEqual(letterPositions("general kenobi").e, [1, 3, 9]);
  });

});

