/*
Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// Пример использования
let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]
*/

class Phonebook {
  constructor() {
    this.contacts = new Map();
  }

  addContact(surname, phone) {
    this.contacts.set(surname, phone);
  }

  findContactByName(surname) {
    return `name: ${surname}, phone: ${this.contacts.get(surname)}`;
  }

  findContactByPhone(phone) {
    return `name: ${this.findEntryByValue(phone)}, phone: ${phone}`;
  }

  deleteContact(surname) {
    this.contacts.delete(surname);
  }

  findEntryByValue(phone) {
    for (const [key, value] of this.contacts.entries()) {
      if (value === phone) {
        return key;
      }
    }
    return null;
  }
}

let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]
