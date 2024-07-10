const palindromes = function (str) {
  // regular expression for special characters
  var regExp = /[\W_]/g;

  //   convert to lower case and replace special characters with empty string
  //   this is done to accomodate special characters and uppercase
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
  var lowerCaseRegExp = str.toLowerCase().replace(regExp, "");

  //   split the string into an array of characters, reverse it and join
  var reverseString = lowerCaseRegExp.split("").reverse().join("");
  return reverseString === lowerCaseRegExp;
};

// Do not edit below this line
module.exports = palindromes;
