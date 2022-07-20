"use strict";

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const day = document.getElementById("fordays");
const todayDay = new Date().getDay() - 1;

const days = () => {
  week.forEach((item, i) => {
    let newdiv = document.createElement("div");
    if (i === +todayDay) {
      newdiv.textContent = week[i];
      newdiv.style.cssText = "font-weight: 700 px; color: blue;";
    }
    if (item == "Суббота" || item == "Воскресенье") {
      newdiv.textContent = week[i];
      newdiv.style.cssText = "font-style: italic";
    } else {
      newdiv.textContent = week[i];
    }
    day.appendChild(newdiv);
  });
};
days();
