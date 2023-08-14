"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const maxFun = () => {
  const param1 = Number(document.getElementById("param1").value);
  const param2 = Number(document.getElementById("param2").value);
  const param3 = Number(document.getElementById("param3").value);

  const maxFind = (a, b, c) => Math.max(a, b, c);
  const result = maxFind(param1, param2, param3);
  const comment = `Максимальное число, из введенных чисел ${param1}, ${param2}, ${param3}, составляет: ${result}`;
  console.log(comment);
  document.getElementById("maxResult").textContent = comment;
  document.getElementById("param1").value = null;
  document.getElementById("param2").value = null;
  document.getElementById("param3").value = null;
};

const maxListener = document.getElementById("maxBtn");
maxListener.addEventListener("click", maxFun);
