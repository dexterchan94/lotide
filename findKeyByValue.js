const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"✅ Assertion Passed: ${actual} === ${expected}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${actual} !== ${expected}"`);
  }
};

const findKeyByValue = function(obj, value) {
  for (key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

// Test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  cop_show:  "Brooklyn Nine-Nine"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);