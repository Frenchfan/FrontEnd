package com.example.reactive.REST.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
CREATE TABLE temperature(
	id SERIAL NOT NULL PRIMARY KEY, 
	celcius NUMERIC(5,2),
	farenheit NUMERIC(5,2)
) 
*/

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "temperature")
public class Temperature {
    
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    @Id
    private int id;
    private double celcius;
    private double farenheit;
    
}
