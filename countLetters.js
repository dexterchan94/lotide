const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`"✅ Assertion Passed: ${actual} === ${expected}"`);
  } else {
    console.log(`"❌ Assertion Failed: ${actual} !== ${expected}"`);
  }
};

// const countOnly = function(allItems, itemsToCount) {
//   const results = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//   }
//   return results;
// };

const countLetters = function(str) {
  let results = {};

  let lowerCaseStr = str.toLowerCase();
  
  for (letter of lowerCaseStr) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  
  return results;
};


let result1 = countLetters("Potato pie");

assertEqual(result1["p"], 2);