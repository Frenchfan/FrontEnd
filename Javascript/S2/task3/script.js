// Задание 3: 
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется 
// в консоли. Определите, в какой строке кода случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь 
// текст ниже, одной строкой с переносами строк:
 
// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.
 
// Тайминг: 20 минут.
const a = '2';
const b = '3';
console.log(a + b);

digit1 = Number(prompt('Введите число1: '));
digit2 = Number(prompt('Введите число2: '));


console.log(`Сумма чисел равна ${digit1 + digit2}.
Разность чисел равна ${digit1 - digit2}.
Произведение чисел равно ${digit1 * digit2}.
Частное чисел равно ${digit1 / digit2}.
Остаток от деления чисел равен ${digit1 % digit2}.`);