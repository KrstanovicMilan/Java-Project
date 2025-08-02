package com.example.demo2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class Demo2Application {

    public static void main(String[] args) {SpringApplication.run(Demo2Application.class, args);
    }

//    @Bean
//    public CommandLineRunner commandLineRunner(AuthenticationService service) {
//
//        return args -> {
//            var admin = RegisterRequestModel.builder()
//                    .firstName("Admin")
//                    .lastName("Admin")
//                    .email("admin@singidunum.ac.rs")
//                    .password("password")
//                    .role(Admin)
//                    .build();
//            System.out.println("Admin token: " + service.register(admin).getAccessToken());
//
//            var employee = RegisterRequestModel.builder()
//                    .firstName("Employee")
//                    .lastName("Employee")
//                    .email("employee@singidunum.ac.rs")
//                    .password("password")
//                    .role(Employee)
//                    .build();
//            System.out.println("Employee token: " + service.register(employee).getAccessToken());
//        };
    }



