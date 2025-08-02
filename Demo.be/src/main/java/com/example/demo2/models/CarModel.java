package com.example.demo2.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cars")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CarModel  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_car;

    @Column(name = "model")
    private String model;

    @Column(name = "gorivo")
    private String gorivo;

    @Column(name = "menjac")
    private String menjac;

    @Column(name = "kubikaza")
    private int kubikaza;

    @Column(name = "cena")
    private int cena;

    @Column(name = "slika")
    private String slika;

}

