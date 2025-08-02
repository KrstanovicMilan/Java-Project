package com.example.demo2.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "rents")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_rent;

    @Column(name = "model")
    private String model;

    @Column(name = "datumPreuzimanja")
    private Date datumPreuzimanja;

    @Column(name = "datumVracanja")
    private Date datumVracanja;

    @Column(name = "brojVozacke")
    private int brojVozacke;

    @Column(name = "naIme")
    private String naIme;


}
