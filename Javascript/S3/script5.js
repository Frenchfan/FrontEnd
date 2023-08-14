/*
Задание 4:
 
1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает 
день недели на русском языке.
2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в 
зависимости от времени суток (утро, день, вечер, ночь), например: 
"Добрый день, Иван." или "Доброй ночи, Иван.".
 
Тайминг: 30 минут. 
*/

// const dayNumber = Number(prompt('введите число от 1 до 7'));

// const dayOfWeek = (dayNumber) => {   
//     switch (dayNumber) {
//         case 1: return 'Monday';
//         case 2: return 'Tuesday';
//         case 3: return 'Wednesday';
//         case 4: return 'Thursday';
//         case 5: return 'Friday';
//         case 6: return 'Saturday';
//         case 7: return 'Sunday';
//         default: return 'Wrong input';
//     }
// };

// console.log(`${dayNumber}-th day of week is ${dayOfWeek(dayNumber)}`);

const myName = prompt('Введите имя: ');
const hours = prompt('Введите время');

/**
 * Sends a special greeting based on daytime
 * @param {string} myName 
 * @param {number} hours 
 */
const timelyGreeting = (myName, hours) => {
    // const currentTime = new Date();
    // const hours = currentTime.getHours();
    
    if (hours >= 0 && hours < 6) {
        console.log(`Доброй ночи, ${myName}`);
    } else if (hours >= 6 && hours < 12) {
        console.log(`Доброе утро, ${myName}`);
    } else if (hours >= 12 && hours < 18) {
        console.log(`Добрый день, ${myName}`);
    } else {
        console.log(`Добрый вечер, ${myName}`);
    }
}

timelyGreeting(myName, hours);