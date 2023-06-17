const name = prompt("Привет, как тебя зовут?");
greeting(name);
function greeting(name) {
    console.log(`Пользователь ввел имя - ${name}`);
}