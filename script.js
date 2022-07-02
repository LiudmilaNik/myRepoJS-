"use strict";
const main = document.querySelector(".main");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.nameTag = selector.substring(1); /*имя тега без 1го символа селектора*/

  this.createElem = function () {
    if (selector[0] == ".") {
      const divClass = document.createElement("div");
      divClass.classList = this.nameTag;
      divClass.style.cssText =
        "height:" +
        height +
        "px; width: " +
        width +
        "px; background-color: " +
        bg +
        "; font-size: " +
        fontSize +
        "px;";
      divClass.textContent = `I'm new div class ${this.selector}`;
      main.append(divClass); /*вставляет divClass в  main*/
    } else if (selector[0] == "#") {
      const parId = document.createElement("p");
      parId.id = this.nameTag;
      parId.style.cssText =
        "height:" +
        height +
        "px; width: " +
        width +
        "px; background-color: " +
        bg +
        "; font-size: " +
        fontSize +
        "px;";
      parId.textContent = "I'm new p id " + this.selector;
      main.append(parId);
    }
  };
};

const newDiv = new DomElement(".block", 50, 300, "green", 25);
newDiv.createElem();

const newPar = new DomElement("#best", 50, 300, "red", 25);
newPar.createElem();
