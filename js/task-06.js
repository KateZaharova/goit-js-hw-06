const textInput = document.querySelector("#validation-input");

let dataLength = textInput.getAttribute("data-length");
//console.log(dataLength)
    

textInput.addEventListener("blur", () => {
    let curLength = textInput.value.length;

    if (dataLength == curLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid")
    }
    else {
        textInput.classList.add("invalid")
        textInput.classList.remove("valid")
    }
});


/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

*/