const assertEqual = require("../assertEqual");
const tail = require("../tail");



// Test cases
console.log(tail([5, 6, 7, 8]));
console.log(tail([5]));
console.log(tail([]));


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!