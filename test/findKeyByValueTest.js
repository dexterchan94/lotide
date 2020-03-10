const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {

  it("should return 'drama' for 'The Wire'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      cop_show:  "Brooklyn Nine-Nine"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined for 'That '70s Show'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      cop_show:  "Brooklyn Nine-Nine"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("should return 'comedy' for 'Brooklyn Nine-Nine'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      cop_show:  "Brooklyn Nine-Nine"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

});
