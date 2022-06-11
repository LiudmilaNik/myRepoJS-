"use strict";

function guessingNumber() {
  let randomNumber = Math.floor(Math.random() * 9 + 1);
  console.log(randomNumber);
  const guessNumber = function () {
    let userNumber = +prompt("Угадай число от 1 до 10");
    console.log(userNumber);

    if (isNaN(userNumber) || userNumber === "") {
      alert("Введите число");
      return guessNumber();
    }

    if (userNumber === null) {
      alert("Игра окончена");
      return;
    }

    if (userNumber !== randomNumber) {
      if (userNumber > randomNumber) {
        alert("Загаданное число меньше!");
        return guessNumber();
      } else if (userNumber < randomNumber) {
        alert("Загаданное число больше!");
        return guessNumber();
      }
    } else {
      alert("Поздравляю, Вы угадали!");
    }

    return;
  };
  guessNumber();
}
guessingNumber();
