package com.example.demo2.services;

import com.example.demo2.models.UserModel;

import java.util.List;

public interface IUserService {
    List<UserModel> GetAll();


    UserModel Create(UserModel model);

    UserModel findByEmail(String email);
}
