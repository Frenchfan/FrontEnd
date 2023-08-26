/*
Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
*/

function sumDigits(params) {
    if (params < 10) {
        return params;
    } 
    return (params % 10 ) + sumDigits(Math.floor(params / 10));
}

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

//option2
const sumDigits2 = (num) => num.toString().split('').map(Number).reduce((a, x) => a + x, 0);
console.log(sumDigits2(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits2(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)