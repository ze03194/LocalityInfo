package com.ze031.fullstack.controllers;

import com.ze031.fullstack.entities.User;
import com.ze031.fullstack.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserRepository userRepository;


    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    @GetMapping("/")
//    String basic() {
//        return "testing";
//    }

    @GetMapping("/user")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{userName}")
    User getUser(@PathVariable String userName) {
        return userRepository.findByUserName(userName);
    }

//    @PostMapping("/register")
//    User addUser(@RequestBody User user) {
//        System.out.println(user);
//        return userRepository.save(user);
//    }
//
//    @GetMapping("/login")
//    String loggedIn() {
//        return "login";
//    }

}
