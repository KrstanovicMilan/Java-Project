package com.example.demo2.models;
import com.example.demo2.enums.RoleEnum;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestModel {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private RoleEnum role;


}
