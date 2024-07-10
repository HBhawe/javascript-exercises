const getTheTitles = function (arr) {
  let titleArray = new Array();

  let array = arr;
  let length = array.length;

  for (let index = 0; index < length; index++) {
    let book = array[index];
    titleArray.push(book.title);
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
