// Задание 5: 
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный 
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и 
// выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести 
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”
 
// Тайминг: 25 минут.
const digit = prompt('Введите число: ');
console.log(digit > 5 ? "Число больше 5": digit < 5 ? "Число меньше 5": "Число равно 5");
const test1 = 10;
const test2 = 15;
console.log(test1 === test2 ? "Переменные равны" : "Переменные не равны");
const digit1 = prompt('Введите число 1: ');
const digit2 = prompt('Введите число 2: ');
console.log(`Минимальное из введенных чисел: ${Math.min(digit1, digit2)}`);
const digit3 = prompt("Введите число больше 0 и меньше 15: ");
console.log(digit3 < 0 || digit3 > 15 ? `А вы, я смотрю, хулиганите! ${digit3} - неверное значение.`: `Спасибо за число ${digit3}.`);
