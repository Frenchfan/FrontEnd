/*
1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна 
вывести в консоль строку: 
"Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
ей числа.
3. Создайте функцию, которая принимает число. 
Функция должна вывести в консоль '+++', если число положительное, либо '---',
если число было отрицательное. В случае, если было передано не число, либо ноль,
функция ничего не должна выводить.
*/
// const myname = prompt('Введите ваше имя');
// const surname = prompt('Введите фамилию');
// const age = Number(prompt('Введите возраст'));


// function greeting(myname, surname, age) {
//     console.log(`Привет, ${myname} ${surname}, Вы уже большой, вам ${age} лет`);
// }

// greeting(myname, surname, age);

// const mynumber = Number(prompt('Введите число'));

// const squared = (mynumber) => {
//     console.log(`Квадрат числа ${mynumber} равен ${mynumber **2}`);
// }

// squared(mynumber)


const mynumber = Number(prompt('Введите число'));

const positiveOrNegative = (mynumber) => {
    if (Number.isFinite(mynumber)) {
        mynumber > 0 ? 
        console.log('+++'):
        console.log('---');
    }

}

positiveOrNegative(mynumber);
