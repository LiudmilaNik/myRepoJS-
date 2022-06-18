" use strict";

// Восстановить порядок книг
const books = document.querySelectorAll(".books");

const book = document.querySelectorAll(".book");

book[0].before(book[1]);
book[3].before(book[4]);
book[2].remove();
books[0].append(book[2]);

console.log(book);

// Заменить картинку заднего фона
const body = document.querySelector("body");
body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';
console.log(body);
console.dir(body.style);

//Исправить заголовок в книге 3
const titleBooks = document.querySelectorAll("h2");
titleBooks[2].querySelector("a").textContent =
  "Книга 3. this и Прототипы Объектов";

//Удалить рекламу со страницы
const adv = document.querySelector(".adv");
adv.remove();
console.log(adv);

//Восстановить порядок глав во второй и пятой книге
const links2 = book[0].querySelectorAll("li");
// links[3].insertAdjacentElement("afterend", "links[6]");
console.log(links2);
links2[3].after(links2[6]);
links2[6].after(links2[8]);
const links5 = book[5].querySelectorAll("li");
console.log(links5);
links5[3].before(links5[9]);
links5[5].after(links5[2]);

//в шестой книге добавить главу
const links6 = book[2].querySelectorAll("li");
const newLink = document.createElement("li");
newLink.textContent = "Глава 8: За пределами ES6";
links6[8].after(newLink);
