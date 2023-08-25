// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

const weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'    
};
console.log(weekDays[2]);

const user = {
    surname: 'Petrov',
    age: 38
}

console.log(`${user.surname} - ${user.age}`);

user.patronymic = prompt('Enter your patronymic');
delete user.surname;

console.log(user);