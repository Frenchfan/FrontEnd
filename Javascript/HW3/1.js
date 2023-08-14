"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const cubicFun = () => {
  const cubicNumber = Number(document.getElementById("cubic").value);
  const cubic = (cubicNumber) => cubicNumber ** 3;
  const result = cubic(cubicNumber);
  const comment = `Результат возведения числа ${cubicNumber} в куб составляет: ${result}`;
  console.log(comment);
  document.getElementById("cubicResult").textContent = comment;
  document.getElementById("cubic").value = null;
};

const cubicListener = document.getElementById("cubicBtn");
cubicListener.addEventListener("click", cubicFun);



