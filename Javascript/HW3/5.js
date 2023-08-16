"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. Демонстрировать работы функций не обязательно.
*/

function operFun(event) {
  const first = Number(document.getElementById("first2").value);
  const second = Number(document.getElementById("second2").value);
  const operation = event.target.textContent;
  let result;
  switch (operation) {
    case "+":
      result = `Сумма ${first} и ${second} составляет: ${first + second}`;
      break;
    case "*":
      result = `Произведение ${first} и ${second} составляет: ${first * second}`;
      break;
    case "/":
      result = `Частное ${first} и ${second} составляет: ${first / second}`;
      break;
    case "-":
      result = `Разность ${first} и ${second} составляет: ${
        first > second ? first - second : second - first
      } - всегда вычитаем из большего меньшее`;
      break;
  }
  document.getElementById("calcResult2").textContent = result;
  document.getElementById("first2").value = null;
  document.getElementById("second2").value = null;
}

const buttons = document.querySelectorAll(".operations2");
buttons.forEach(button => {
    button.addEventListener("click", operFun);
});