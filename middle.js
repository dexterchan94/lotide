const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice((array.length / 2) - 1, (array.length / 2) + 1);
  } else {
    return array.slice(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1);
  }
};

module.exports = middle;