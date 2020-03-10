const flatten = function(arr) {
  let flattenedArray = [];

  for (element of arr) {
    if (Array.isArray(element)) {
      for (subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

module.exports = flatten;