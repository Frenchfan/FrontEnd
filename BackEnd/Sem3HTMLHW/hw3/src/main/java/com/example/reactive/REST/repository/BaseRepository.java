package com.example.reactive.REST.repository;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

@NoRepositoryBean
public interface BaseRepository<T, ID> extends ReactiveCrudRepository<T, ID>{    
}
