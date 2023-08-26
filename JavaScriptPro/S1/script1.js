/*
1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]
*/

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//option1
const removeDuplicates = (...arr) => [...new Set(arr)];
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));


//option2
function removeDuplicates2(...args) {
    return args.filter((value, index) => {
        return args.indexOf(value) === index;
    });
}

console.log(removeDuplicates2(1, 2, 3, 2, 4, 1, 5));
