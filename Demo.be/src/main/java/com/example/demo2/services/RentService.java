package com.example.demo2.services;

import com.example.demo2.models.RentModel;
import com.example.demo2.repositories.IRentRepository;
import org.springframework.stereotype.Service;
@Service

public class RentService implements IRentService {
    private IRentRepository iRentRepository;

    private RentService(IRentRepository iRentRepository){
        this.iRentRepository = iRentRepository;
    }



    @Override
    public RentModel Create(RentModel model) {
        return iRentRepository.save(model);
    }
}
