package com.example.demo2.controllers;

import com.example.demo2.models.UserModel;
import com.example.demo2.services.IUserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@AllArgsConstructor
public class UserController {

    private IUserService iUserService;

//    public UserController(IUserService iUserService) {
//        this.iUserService = iUserService;
//    }


    @GetMapping("home")
    public String Home(){
        return "Home page";
    }

    @GetMapping("get")
//    @CrossOrigin("*")
    public List<UserModel> GetAll(){
        return iUserService.GetAll();
    }


    @PostMapping("create")
    @CrossOrigin("*")
    //OVO JE JE DAN OD NACINA HENDLOVANJA ERRORA PREKO RESPONSENTITY-A I BINDINGRESULT-A
    public ResponseEntity<?> Create(@RequestBody @Valid UserModel model, BindingResult result){

        if(result.hasErrors()){
            return  new ResponseEntity<>(result.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(iUserService.Create(model), HttpStatus.OK);
    }
}


//   OVO JE NACIN UPISIVANJA USERA BEZ HENDLOVANJA ERRORA
//    public UserModel Create( UserModel model ){
//
//        return iUserService.Create(model);
//    }

