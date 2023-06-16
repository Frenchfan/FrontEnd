package com.example.reactive.REST;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(
		title = "Spring r2dbc Webflux example",
		version = "1.0",
		description = "assembled on June 15, 2023"
))
public class ReactiveRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactiveRestApplication.class, args);
	}

}
