const domManipulation = function () {};

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// RED PARAGRAPH ELEMENT
const paragraph = document.createElement("p");
paragraph.style.cssText = "color:red;";
paragraph.innerText = "Hey I'm red!";
container.appendChild(paragraph);

// BLUE H3 ELEMENT
const headingThree = document.createElement("h3");
headingThree.style.cssText = "color:blue";
headingThree.innerText = "I'm a blue h3!";
container.appendChild(headingThree);

// DIV WITH BLACK BORDER AND CHILD ELEMENTS
const divBlackBorder = document.createElement("div");
divBlackBorder.style.background = "pink";
divBlackBorder.style["borderColor"] = "black";

// HEADING 1
const headingOne = document.createElement("h3");
headingOne.innerText = "I'm in a div!";
divBlackBorder.appendChild(headingOne);

const paragraphDiv = document.createElement("p");
paragraphDiv.innerText = "ME TOO!";
divBlackBorder.appendChild(paragraphDiv);

container.appendChild(divBlackBorder);

// Do not edit below this line
module.exports = domManipulation;
