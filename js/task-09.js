
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let bodyEl = document.querySelector(`body`);
let buttonEl = document.querySelector(`button`);
let color = document.querySelector(`.color`);

buttonEl.addEventListener(`click`, onBodyChahge);

function onBodyChahge () {
  let changeColor  = document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = changeColor;
}











//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
//при клике на button.change-color и выводит значение цвета в span.color.