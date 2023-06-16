package com.example.reactive.REST.repository;

import com.example.reactive.REST.model.Customer;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;


public interface CustomerRepository extends ReactiveCrudRepository<Customer, Integer> {
}
