/*
Задание 3: 
1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
- Создайте переменную суммы и присвойте сумму чисел из двух переменных.
- Создайте переменную разности и присвойте разность текущего года и вашего возраста.
- Создайте переменную произведения и присвойте произведение чисел двух переменных.
- Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
2. Выведите в консоль все созданные переменные.
3. Сложите все созданные переменные и выведите результат в консоль.
Тайминг: 20 минут.
*/
const age = 38;
const currentYear = 2023;
const currentYear2 = new Date().getFullYear();
console.log(age, currentYear);
const sum = age + currentYear;
console.log(sum);

const difference = currentYear - age;
console.log (difference);

const multiply = currentYear * age;
console.log('multiply = ', multiply);

const divisor = currentYear / age;
console.log('divisor - ', divisor);
