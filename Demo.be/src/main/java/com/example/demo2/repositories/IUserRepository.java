package com.example.demo2.repositories;

import com.example.demo2.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<UserModel, Integer> {
    UserModel findByEmail(String email);

}
