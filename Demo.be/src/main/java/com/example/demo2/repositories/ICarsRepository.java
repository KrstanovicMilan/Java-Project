package com.example.demo2.repositories;

import com.example.demo2.models.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarsRepository extends JpaRepository<CarModel, Integer> {
}
