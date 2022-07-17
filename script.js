"use strict";
// Урок №2

const num = 266219;
const getMultiple = (num) =>
  num
    .toString()
    .split("")
    .reduce((res, item) => item * res, 1);

const resultP = getMultiple(123);
const result = resultP ** 3;

console.log(resultP);
console.log(result);
console.log(String(num).slice(0, 2));

// Урок №4

const letter = prompt("write");

const myString = function (str) {
  if (typeof str !== "string") {
    alert("Это не строка");
    return;
  } else str = str.trim();
  return str.length > 30 ? str.slice(0, 30) + "..." : str;
};

console.log(myString(letter));
