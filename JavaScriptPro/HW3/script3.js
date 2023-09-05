/*
Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

const student = new Student();
student.setName('Питер Паркер);
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();
*/

class Student {
    #name;
    #age;
    #averageGrade;
    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setAge(age) {
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }    
    setAverageGrade(averageGrade) {
        this.#averageGrade = averageGrade;
    }
    getAverageGrade() {
        return this.#averageGrade;
    }
    displayInfo() {
        console.log(`Name: ${this.#name}, Age: ${this.#age}, Grade: ${this.#averageGrade}`);
    }    
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();