package com.ze031.fullstack.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "USER_TABLE")
public class User {
    @Id
    private String userName;
    private String firstName;
    private String email;
    private String password;
    private String zipCode;
    private String role;
    private boolean enabled = false;

//    public User() {
//
//    }

//    public User(String userName, String firstName, String email, String password, String zipCode, String role) {
//        this.userName = userName;
//        this.firstName = firstName;
//        this.email = email;
//        this.password = password;
//        this.zipCode = zipCode;
//        this.role = role;
//    }
//
//
//    public String getUserName() {
//        return userName;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getZipCode() {
//        return zipCode;
//    }
//
//    public void setZipCode(String zipCode) {
//        this.zipCode = zipCode;
//    }

    @Override
    public String toString() {
        return "User{" + "firstName=" + this.firstName + ", userName=" + this.userName + ", email=" + this.email + ", zipCode=" + this.zipCode + "}";
    }
}
