package com.example.demo2.controllers;

import com.example.demo2.models.CarModel;
import com.example.demo2.models.RentModel;
import com.example.demo2.services.ICarsService;
import com.example.demo2.services.IRentService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
@AllArgsConstructor

public class CarController {

    private ICarsService iCarsService;
    private IRentService iRentService;



    @GetMapping("/get")
   // @CrossOrigin("*")
    public List<CarModel> GetAll(){
        return iCarsService.GetAll();
    }


@PostMapping("/create")
@CrossOrigin("*")

public ResponseEntity<?> Create(@RequestBody @Valid CarModel model, BindingResult result){

    if(result.hasErrors()){
        return  new ResponseEntity<>(result.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>(iCarsService.Create(model), HttpStatus.OK);
}

    @PostMapping("/rent")
    @CrossOrigin("*")

    public ResponseEntity<?> Rent(@RequestBody @Valid RentModel model, BindingResult result){

        if(result.hasErrors()){
            return  new ResponseEntity<>(result.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(iRentService.Create(model), HttpStatus.OK);
    }


}
