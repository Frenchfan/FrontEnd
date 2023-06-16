package com.example.reactive.REST.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.reactive.REST.repository.BaseRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public abstract class BaseController<T, ID, R extends BaseRepository<T, ID>> {
    
    @Autowired
    protected R repository;

        @GetMapping
    public Flux<T> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Mono<T> getById(@PathVariable ID id) {
        return repository.findById(id);
    }

    @PostMapping
    public Mono<T> create(@RequestBody T entity) {
        return repository.save(entity);
    }

    @PutMapping("/{id}")
    public Mono<T> update(@PathVariable ID id, @RequestBody T entity) {
        return repository.findById(id)
            .flatMap(existingEntity -> repository.save(entity))
            .switchIfEmpty(Mono.error(new NotFoundException()));
    }

    @DeleteMapping("/{id}")
    public Mono<Void> delete(@PathVariable ID id) {
        return repository.deleteById(id);
    }
}


