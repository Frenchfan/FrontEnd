// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i=2; i < arr.length; i+=2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    } 
    return max;
}
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50]));