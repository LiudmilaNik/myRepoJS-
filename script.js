"use strict";

// Урок №5
let arr = ["32", "27", "755", "104", "47", "78", "377"];

arr.forEach((item) => {
  if (item.startsWith("2") || item.startsWith("4")) {
    console.log(item);
  }
});

let prime = document.getElementById("primeNum");
primeNumber: for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue primeNumber;
  }
  console.log("простое :" + i + " " + " Делители этого числа: 1 и " + i);
}
