package com.example.demo2.models;


import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequestModel {
    private String email;
    private String password;
}
