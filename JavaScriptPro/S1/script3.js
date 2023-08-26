/*
1. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число.
Значение должно быть доступно только через методы объекта, а не напрямую.
*/

const createCalculator = (initial) => {
  let value = initial;
  return {
    add: (number) => (value += number),
    subtract: (number) => (value -= number),
  };
};

const test = createCalculator(1);
console.log(test.add(5));
console.log(test.subtract(10));
