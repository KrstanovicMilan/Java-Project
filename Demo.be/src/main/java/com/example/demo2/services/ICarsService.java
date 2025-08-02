package com.example.demo2.services;

import com.example.demo2.models.CarModel;

import java.util.List;

public interface ICarsService {
    List<CarModel> GetAll();

    CarModel Create(CarModel model);



}
