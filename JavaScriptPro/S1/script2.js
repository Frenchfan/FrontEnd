/*
Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.
2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.
*/

const getEvenNumbers = (unsortedArr) => unsortedArr.filter((x) => x % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

const calculateAverage = (beforeSum) =>
  beforeSum.reduce((sum, item) => sum + item, 0) / beforeSum.length;

console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

//option1
const capitalizeFirstLetter = (newLine) =>
  newLine.split(" ").map((x) => x[0].toUpperCase() + x.slice(1)).join(" ");
console.log(capitalizeFirstLetter("hello world"));

//option2
const capitalizeFirstLetter2 =(newLine) => newLine.replace(/(^|\s)\S/g, (a) => a.toUpperCase());


console.log(capitalizeFirstLetter2("hello world"));