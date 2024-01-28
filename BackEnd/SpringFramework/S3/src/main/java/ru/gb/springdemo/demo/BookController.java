package ru.gb.springdemo.demo;

import lombok.Data;
import org.springframework.web.bind.annotation.*;
import ru.gb.springdemo.model.Book;
import ru.gb.springdemo.repository.BookRepository;

@RestController
@Data
public class BookController {

    private final BookRepository bookRepository;

    @GetMapping("/book/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.getBookById(id);
    }

    @DeleteMapping("/book/{id}")
    public boolean deleteBook(@PathVariable Long id) {
        return bookRepository.deleteBookById(id);
    }

    @PostMapping("/book")
    public Book saveBook(@RequestBody Book book) {
        return bookRepository.saveBook(book);
    }
}
