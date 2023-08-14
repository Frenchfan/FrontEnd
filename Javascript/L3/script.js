// function helloName(name) {
//     console.log(name);
// }

// helloName('Alex');

// let count = 5;

// function counter() {
//     return count++;
// }

// counter();
// counter();

let age = Number(prompt('Сколько вам лет?'));

// function upAge(age) {
//     return age + 5;
// }

// const lvlUpAge = () => {
//     return age + 5;
// }

const lvlUpAge = () => age + 5;//самая короткая запись

// console.log(`Через 5 лет Вам будет ${upAge(age)}`);
console.log(`Через 5 лет Вам будет ${lvlUpAge()}`);
// console.log(count);

const sum = (param1, param2) => {
    return param1 + param2;
}

const result = sum(2,5);

const salary = (money) => {
    money = money * 0.87;
    return money * 0.75;
}

const userMoney = Number(prompt('Сколько ты зарабатываешь?'));
console.log(salary(userMoney));
console.log(`Для расходов можно использовать ${salary(userMoney)}`);