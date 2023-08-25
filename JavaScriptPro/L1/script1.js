const arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));
function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return factorial(number - 1) * number;
}