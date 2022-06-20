" use strict";
//
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  const input = document.getElementById("text").value;
  const square = document.getElementById("square");
  square.style.backgroundColor = input;
  console.log(input);
});

const e_btn = document.getElementById("e_btn");
console.log(e_btn);
e_btn.style = "display:none";

const range = document.getElementById("range");
range.addEventListener("change", function (event) {
  const circle = document.getElementById("circle");
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
  const rangeSpan = document.querySelector("span");
  rangeSpan.textContent = range.value;
  console.log(rangeSpan);
});
console.log(circle);
