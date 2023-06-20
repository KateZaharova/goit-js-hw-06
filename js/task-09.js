function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");


function changeColor () {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}

button.addEventListener("click", () => {
  changeColor()
})

/*

Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

*/
