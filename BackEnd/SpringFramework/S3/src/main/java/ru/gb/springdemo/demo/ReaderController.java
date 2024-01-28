package ru.gb.springdemo.demo;

import lombok.Data;
import org.springframework.web.bind.annotation.*;
import ru.gb.springdemo.model.Issue;
import ru.gb.springdemo.model.Reader;
import ru.gb.springdemo.repository.ReaderRepository;

@RestController
@Data
public class ReaderController {

    private final ReaderRepository readerRepository;

    @GetMapping("/reader/{id}")
    public Reader getReader(@PathVariable Long id) {
        return readerRepository.getReaderById(id);
    }

    @DeleteMapping("/reader/{id}")
    public boolean deleteReader(@PathVariable Long id) {
        return readerRepository.deleteReaderById(id);
    }

    @PostMapping("/reader")
    public Reader saveReader(@RequestBody Reader reader) {
        return readerRepository.saveReader(reader);
    }

}

