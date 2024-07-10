const fibonacci = function (num) {
  let number = parseInt(num);
  if (number === 0) {
    return 0;
  } else if (number < 0) {
    return "OOPS";
  }

  var fibonnaciSeries = new Array();
  var n1 = 1,
    n2 = 1,
    nextValue;

  for (let i = 1; i <= number; i++) {
    fibonnaciSeries.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextValue;
  }
  return fibonnaciSeries[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
