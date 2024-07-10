const add = function (num1, num2) {
  let number1 = num1;
  let number2 = num2;
  let addition = number1 + number2;
  return addition;
};

const subtract = function (num1, num2) {
  let number1 = num1;
  let number2 = num2;
  let subtraction = number1 - number2;
  return subtraction;
};

const sum = function (array) {
  let sum = 0;
  let length = array.length;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
};

const multiply = function (array) {
  let multiplication = 1;
  let length = array.length;
  for (let index = 0; index < array.length; index++) {
    multiplication *= array[index];
  }
  return multiplication;
};

const power = function (num1, num2) {
  let number1 = num1;
  let number2 = num2;
  let power = Math.pow(number1, number2);
  return power;
};

const factorial = function (number) {
  let factorial = 1;
  for (let index = number; index > 0; index--) {
    factorial *= index;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
