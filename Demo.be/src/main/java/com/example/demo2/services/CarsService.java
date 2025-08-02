package com.example.demo2.services;

import com.example.demo2.models.CarModel;
import com.example.demo2.repositories.ICarsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarsService implements ICarsService{
    private ICarsRepository iCarsRepository;
    public CarsService(ICarsRepository iCarsRepository) {
        this.iCarsRepository = iCarsRepository;
    }
    @Override
    public List<CarModel> GetAll() {
        return iCarsRepository.findAll();
    }

    @Override
    public CarModel Create(CarModel model) {
        return iCarsRepository.save(model);
    }


}
