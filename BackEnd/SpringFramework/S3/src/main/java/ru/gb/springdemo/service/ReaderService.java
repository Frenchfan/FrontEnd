package ru.gb.springdemo.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import ru.gb.springdemo.model.Issue;
import ru.gb.springdemo.model.Reader;
import ru.gb.springdemo.repository.ReaderRepository;

import java.util.List;

@Data
@AllArgsConstructor
public class ReaderService {

    private final ReaderRepository readerRepository;

    private final IssuerService issuerService;

    public List<Issue> getIssuesByReaderId(Long readerId) {
        return issuerService.getIssuesByReaderId(readerId);
    }






}
