const buttonClick = function () {};

const btn = document.querySelector("#btn");
btn.onclick = () => alert(`This is method 2`);

const method3 = document.querySelector("#method3");
method3.addEventListener("click", function (e) {
  console.log(e);
  alert(`This is method 3`);
});

// Do not edit below this line
module.exports = buttonClick;
