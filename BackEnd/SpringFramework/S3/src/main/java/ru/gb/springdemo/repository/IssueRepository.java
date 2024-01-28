package ru.gb.springdemo.repository;

import org.springframework.stereotype.Repository;
import ru.gb.springdemo.model.Issue;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Repository
public class IssueRepository {

  private final List<Issue> issues;

  public IssueRepository() {
    this.issues = new ArrayList<>();
  }

  public void save(Issue issue) {
    // insert into ....
    issues.add(issue);
  }

  public Issue getIssue(long id) {
    return issues.stream().filter(it -> Objects.equals(it.getId(), id))
      .findFirst()
      .orElse(null);
  }

  public boolean checkReader(long readerId) {
    return issues.stream().anyMatch(it -> Objects.equals(it.getReaderId(), readerId));
  }

  public List<Issue> getIssuesByReaderId(Long readerId) {
    return issues.stream().filter(it -> Objects.equals(it.getReaderId(), readerId))
      .toList();
  }
}
