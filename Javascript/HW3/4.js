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

const sumFun = () => {
  const first = Number(document.getElementById("first").value);
  const second = Number(document.getElementById("second").value);
  const sumFind = (a, b) => a + b;
  const result = sumFind(first, second);
  const comment = `Сумма чисел ${first} и ${second} составляет: ${result}`;
  console.log(comment);
  document.getElementById("calcResult").textContent = comment;
  document.getElementById("first").value = null;
  document.getElementById("second").value = null;
};

const multiFun = () => {
  const first = Number(document.getElementById("first").value);
  const second = Number(document.getElementById("second").value);
  const multiFind = (a, b) => a * b;
  const result = multiFind(first, second);
  const comment = `Произведение чисел ${first} и ${second} составляет: ${result}`;
  console.log(comment);
  document.getElementById("calcResult").textContent = comment;
  document.getElementById("first").value = null;
  document.getElementById("second").value = null;
};

const divFun = () => {
  const first = Number(document.getElementById("first").value);
  const second = Number(document.getElementById("second").value);
  const divFind = (a, b) => a / b;
  const result = divFind(first, second);
  const comment = `Частное чисел ${first} и ${second} составляет: ${result}`;
  console.log(comment);
  document.getElementById("calcResult").textContent = comment;
  document.getElementById("first").value = null;
  document.getElementById("second").value = null;
};

const diffFun = () => {
  const first = Number(document.getElementById("first").value);
  const second = Number(document.getElementById("second").value);
  const diffFind = (a, b) => {
    if (a > b) {return a - b}
    return b - a;
  };  
  const result = diffFind(first, second);
  const comment = `Разность чисел ${first} и ${second} составляет: ${result} - из большего всегда вычитаем меньшее`;
  console.log(comment);
  document.getElementById("calcResult").textContent = comment;
  document.getElementById("first").value = null;
  document.getElementById("second").value = null;
};

const sumListener = document.getElementById("sumBtn");
sumListener.addEventListener("click", sumFun);

const multiListener = document.getElementById("multiBtn");
multiListener.addEventListener("click", multiFun);

const diffListener = document.getElementById("diffBtn");
diffListener.addEventListener("click", diffFun);

const divListener = document.getElementById("divBtn");
divListener.addEventListener("click", divFun);