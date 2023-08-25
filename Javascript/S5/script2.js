/*
Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
1. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.
*/

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const weekDays2 = {};

for (let index = 0; index < arr1.length; index++) {
    const dayName = arr1[index];
    const dayNumber = arr2[index];
    weekDays2[dayName] = dayNumber; 
}

console.log(weekDays2);

const obj = {x: 1, y: 2, z: 3};

for (const key in obj) {
    console.log(obj[key] ** 2);
}

console.log(Object.values(obj).map(x => x ** 2));