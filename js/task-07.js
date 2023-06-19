const fontSize = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

fontSize.addEventListener("input", (event) => {
    span.setAttribute("font-size", event.currentTarget.value)
    span.style.fontSize = `${event.currentTarget.value}px`;
})


/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/