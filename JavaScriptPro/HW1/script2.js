/*
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

const createCounter = () => {
  let val = 5;
  return {
    increment: () => ++val,//prefix - для приоретизации операции
    decrement: () => --val
  };
};

const test2 = createCounter();
console.log(test2.increment());