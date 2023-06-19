const counter = document.querySelector("#value");
let counterValue=0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]')

decrementButton.addEventListener("click", handlerMinusClick)
incrementButton.addEventListener("click", handlerPlusClick)


function handlerPlusClick() {
    counterValue += 1
    counter.textContent = counterValue;
}


function handlerMinusClick() {
    counterValue -= 1
    counter.textContent = counterValue;
}


/*
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/