/*
Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/

class Book {

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        return (`This book's title is ${this.title}, its author is ${this.author}, it contains ${this.pages} pages`);
    }
};

const book = new Book('Tom Sawyer', 'Mark Twain', 500);
console.log(book.displayInfo());