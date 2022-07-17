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
const todayDay = new Date();

const days = () => {
  week.forEach((item, i) => {
    let newdiv = document.createElement("div");
    if (i === +todayDay.getDay() - 1) {
      newdiv.style.cssText = "font-weight: 700 px";
      newdiv.textContent = week[i];
    }
    if (item == "Суббота" || item == "Воскресенье") {
      newdiv.style.cssText = "font-style: italic";
      newdiv.textContent = week[i];
    } else {
      newdiv.textContent = week[i];
    }
    day.appendChild(newdiv);
  });
};
days();
