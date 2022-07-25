"use strict";
const getData = () => {
  return fetch("db.json").then((response) => response.json());
};

const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset-UTF-8",
    },
  }).then((response) => response.json());
};

document.addEventListener("DOMContentLoaded", () => {
  const fail = {
    user: "Vlad",
    age: 33,
    role: "developer",
  };

  getData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  sendData("https://jsonplaceholder.typicode.com/posts", JSON.stringify(fail))
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
