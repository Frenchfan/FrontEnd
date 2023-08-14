"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

//При таком подходе проверка на type Mismatch не актуальна.

const salaryFun = () => {
  const incomeAmount = Number(document.getElementById("income").value);
  const netSalary = (incomeAmount) => incomeAmount * 0.87;
  const result = netSalary(incomeAmount);
  const comment = `После вычета 13% от вашей зарплаты, размером ${incomeAmount} руб, на руки Вам отдадут: ${result} руб`;
  console.log(comment);
  document.getElementById("netSalaryResult").textContent = comment;
  document.getElementById("income").value = null;
};

const incomeListener = document.getElementById("incomeBtn");
incomeListener.addEventListener("click", salaryFun);
