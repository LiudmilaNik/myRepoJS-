" use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const headerButton = document.querySelector(".header-button");

let toDoData = []; /*массив для хранения ToDo*/
console.log(toDoData);

/*подгружать дела из временного хранилища в массив*/
if (!localStorage.toDoData) {
  toDoData = [];
} else {
  toDoData = JSON.parse(localStorage.getItem("toDoData"));
}

/*отправляем массив на хранение во временное хранилище*/
const updateLocal = function () {
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
};

/*отрисовывает ToDo*/
const render = function () {
  /*нужно очищать списки, чтобы при добавлении новых старые не дублировались:*/
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";
  /*при каждой итерации получаем новый объект:*/
  toDoData.forEach(function (item, index) {
    const li = document.createElement("li"); /*создаем пустой объект li*/
    li.classList.add("todo-item"); /*присваиваем класс*/

    /*вставляем в пустые теги нужную верстку в виде строки:*/
    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    /*вставляем элементы в список дел или в список завершенных дел:*/
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }
    /*находим галочку,при клике на нее меняем ее свойство (completed: false) на противоположное:*/
    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
    /*при клике на корзину удаляем задачи и временное хранилище:*/
    li.querySelector(".todo-remove").addEventListener("click", function () {
      toDoData.splice(index, 1);
      localStorage.clear();
      render();
    });
  });
};

/*вешаем обработчик событий на форму:*/
todoControl.addEventListener("submit", function (event) {
  event.preventDefault(); /*отмена перезагрузки страницы*/

  /*пустые поля добавляться не должны:*/
  headerButton.disablet = false;
  if (headerInput.value == "") {
    headerButton.disablet = true;
  } else {
    /*создание нового объекта */
    const newToDo = {
      text: headerInput.value,
      completed: false,
    };
    /*добавление в конец массива:*/
    toDoData.push(newToDo);
  }
  headerInput.value = ""; /*очищает input после события submit*/
  updateLocal();
  render();
});
