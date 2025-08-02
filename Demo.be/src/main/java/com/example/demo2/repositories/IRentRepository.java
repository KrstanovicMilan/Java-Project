package com.example.demo2.repositories;

import com.example.demo2.models.RentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRentRepository extends JpaRepository<RentModel, Integer> {
}
