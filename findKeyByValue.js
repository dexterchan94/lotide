const findKeyByValue = function(obj, value) {
  for (key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;
