const shoppingList = function () {};

const unorderedList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", buttonClick);

function buttonClick() {
  let inputValue = input.value;
  input.value = "";

  let listElement = document.createElement("li");
  let spanElement = document.createElement("span");
  let buttonElement = document.createElement("button");

  listElement.appendChild(spanElement);
  listElement.appendChild(buttonElement);

  spanElement.textContent = inputValue;
  buttonElement.textContent = "Delete";
  buttonElement.addEventListener("click", function () {
    unorderedList.removeChild(listElement);
  });

  unorderedList.appendChild(listElement);
}

// Do not edit below this line
module.exports = shoppingList;
