const multipleQuerySelector = function () {};

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
console.log(buttons);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

// Do not edit below this line
module.exports = multipleQuerySelector;
