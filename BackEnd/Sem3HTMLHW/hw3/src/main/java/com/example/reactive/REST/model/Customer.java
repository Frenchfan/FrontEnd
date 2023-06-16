package com.example.reactive.REST.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    @Id
    private Integer id;
    @Column
    private String name;
}
