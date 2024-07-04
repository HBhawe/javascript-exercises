const repeatString = function (string, num) {
  let text = string;
  let number = num;
  let resultString = "";

  for (let i = 1; i <= number; i++) {
    resultString += text;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
