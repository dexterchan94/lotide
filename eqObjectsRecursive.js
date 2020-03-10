const isObject = function(element) {
  if (typeof(element) === "object" && !Array.isArray(element)) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let element in object1) {
    if (isObject(object1[element]) && isObject(object2[element])) {
      if(!eqObjects(object1[element], object2[element])) {
        return false;
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
