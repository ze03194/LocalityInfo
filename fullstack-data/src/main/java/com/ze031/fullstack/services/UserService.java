package com.ze031.fullstack.services;

import com.ze031.fullstack.entities.User;
import com.ze031.fullstack.models.UserModel;

public interface UserService {
    User registerUser(UserModel userModel);

    void saveVerificationTokenForUser(String token, User user);

    String validateVerificationToken(String token);
}
