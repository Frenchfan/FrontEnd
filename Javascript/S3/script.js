/*
Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
*/
const sayHello = () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const result = `Hello, ${name} ${surname}, ${age} years old`;
  document.getElementById("task1-1").textContent = result;
  console.log(`Hello, ${name} ${surname}, ${age} years old`);
};
/*
Создайте функцию которая возводит переданное число в
квадрат
*/
const square = () => {
  const newNumber = document.getElementById("number").value;
  document.getElementById("task1-2").textContent = newNumber * newNumber;
};
/*
Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.
*/
const positiveOrNegative = () => {
  const newNumber = document.getElementById("newNumber").value;
  newNumber >= 0
    ? (document.getElementById("task1-3").textContent = "+++")
    : (document.getElementById("task1-3").textContent = "---");
};

const btn3 = document.getElementById('btn3');
btn3.addEventListener("click", positiveOrNegative);
