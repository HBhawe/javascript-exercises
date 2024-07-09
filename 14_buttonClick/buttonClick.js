const buttonClick = function () {};

const btn = document.querySelector("#btn");
btn.onclick = () => alert(`This is method 2`);

const method2 = document.querySelector("#method2");
method2.addEventListener("click", () => {
  alert(`This is method 3`);
});

// Do not edit below this line
module.exports = buttonClick;
