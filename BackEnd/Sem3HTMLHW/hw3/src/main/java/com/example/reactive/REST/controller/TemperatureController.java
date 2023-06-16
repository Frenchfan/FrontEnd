package com.example.reactive.REST.controller;

import com.example.reactive.REST.model.Temperature;
import com.example.reactive.REST.repository.TemperatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/temperature")
public class TemperatureController extends BaseController<Temperature, Integer, TemperatureRepository> {

    // @Autowired
    // TemperatureRepository repository;

    // @GetMapping
    // public Flux<Temperature> getTemperature(){
    //     return repository.findAll();
    // }

    @GetMapping("last/{count}")
    public Flux<Temperature> getLastTemperature(@PathVariable int count){
        return repository.findAll()
        .collectList()
        .flatMapMany(list -> 
        Flux.fromIterable(list.subList(Math.max(list.size() - count, 0), list.size())));
     }

    // @GetMapping("/{id}")
    // public Mono<Temperature> getTemperature(@PathVariable Integer id) {
    //     return repository.findById(id);
    // }

    // @PostMapping
    // public Mono<Temperature> createTemperature(@RequestBody Temperature temperature) {
    //     return repository.save(temperature);
    // }

    @Override
    @PutMapping("/{id}")
    public Mono<Temperature> update(@PathVariable Integer id, @RequestBody Temperature temperature) {
        return repository.findById(id)
                .map((c) -> {
                    c.setCelcius(temperature.getCelcius());
                    c.setFarenheit(temperature.getFarenheit());
                    return c;
                }).flatMap(c -> repository.save(c));
    }

    // @DeleteMapping("/{id}")
    // public Mono<Void> deleteTemperature(@PathVariable Integer id) {
    //     return repository.deleteById(id);
    // }
}
