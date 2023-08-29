/*
Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog 
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.
*/

const Animal = {
    name: "Rex",
    eat: function () {
        return `${this.name} is eating.`;
    }
};

const Dog = {
    name: "Max",
    bark: function () {
        return `${this.name} is barking.`;
    },
    eat: Animal.eat
};

console.log(Dog.eat());
console.log(Dog.bark());