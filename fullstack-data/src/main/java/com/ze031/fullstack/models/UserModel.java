package com.ze031.fullstack.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    private String firstName;
    private String userName;
    private String email;
    private String password;
    private String matchingPassword;
    private String zipCode;
}
