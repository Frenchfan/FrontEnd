/*
Напишем функцию, которая будет находить факториал числа с использованием рекурсии
*/

const factorial = (n) => {
    return n === 0 ? 1 : n * factorial(n - 1) //приходится исользовать return - иначе не работает
};

console.log(factorial(5));
console.log(factorial(1));