const a = +prompt("Введи число a");
const b = Number.parseInt(prompt("Введи число a"));
alert(`Результат сложения чисел ${a} и ${b} равен ${sum(a, b)}`);

function sum(a, b) {
    return a + b;
}
