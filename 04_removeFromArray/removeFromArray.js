const removeFromArray = function () {
  let argumentsLength = arguments.length;
  var array = arguments[0];
  //   var length = array.length;

  for (let i = 0; i < argumentsLength; i++) {
    let element = arguments[i];

    array = array.filter((item) => item !== element);

    // OLD METHOD: not working for test 3 onwards
    // let index = array.indexOf(element);
    // if (index > -1) {
    //   // only splice array when item is found
    //   array.splice(index, 1); // 2nd parameter means remove one item only
    // }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
