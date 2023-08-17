// let count = 0;
// while (count < 3) {
//     console.log('Hello');
//     count++;
// }
// for (let i = 0; i < 3; i++) {
//   console.log("Hello");
// }

// let pass;
// let count;

// do {
//   if (count >= 3) {
//     alert("Wrong password");
//   }
//   pass = Number(prompt("Enter the password, please"));
//   count++;
// } while (pass !== "234");

const arr = [1, 2, 'hello']; // всегда так, чтобы избежать случайного присвоения переменной с именем массива совсем другого от массива значения -  например, arr = 5; - теперьэто больше не массив
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 1]);
const user = [];
user.push(prompt('Your name:'));
user.push(Number(prompt('Your age:')));

const numbers = [2, 3, 19, 15];
console.log(numbers);
