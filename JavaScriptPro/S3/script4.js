/*
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
● Свойство name (строка) - имя животного.
● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
● Свойство breed (строка) - порода собаки.
● Метод fetch() - выводит в консоль сообщение "Собака [name]
принесла мяч.".
*/

class Animal {
    constructor(animalName) {
        this.animalName = animalName;
    }

    speak() {
        console.log(`${this.animalName} издает звук`);
    }

}

class Dog extends Animal{
    constructor(dogName, breed) {
        super(dogName);
        this.breed = breed;
    }

    fetch() {
        console.log(`Собака ${this.animalName} принесла мяч`);
    }

    speak() {
        console.log(`Животное ${this.animalName} издает звук`);        
    }

}


const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.