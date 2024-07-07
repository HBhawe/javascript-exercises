const sumAll = function (num1, num2) {
  let number1 = num1;
  let number2 = num2;
  let sum = 0;

  if (number1 < 0 || number2 < 0) {
    return "ERROR";
  }

  if (typeof number1 != "number" || typeof number2 != "number") {
    return "ERROR";
  }

  if (number1 > number2) {
    for (let i = number2; i <= number1; i++) {
      sum += i;
    }
  } else if (number1 < number2) {
    for (let i = number1; i <= number2; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
