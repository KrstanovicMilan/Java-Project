package com.example.demo2.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum PermissionEnum {
    AdminRead("admin : read"),
    AdminUpdate("admin : update"),
    AdminCreate("admin : cretae"),
    AdminDelete("admin : delete"),

    EmployeeRead("employee : read"),
    EmployeeUpdate("employee : update"),
    EmployeeCreate("employee : create"),
    EmployeeDelete("employee : delete");

    @Getter
    private final String permission;
}
