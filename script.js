" use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  const input = document.querySelector("input").value;
  const square = document.getElementById("square");
  square.style.backgroundColor = input;
  console.log(input);
});
