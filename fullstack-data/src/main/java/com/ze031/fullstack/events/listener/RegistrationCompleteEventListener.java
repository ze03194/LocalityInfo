package com.ze031.fullstack.events.listener;

import com.ze031.fullstack.entities.User;
import com.ze031.fullstack.entities.VerificationToken;
import com.ze031.fullstack.events.RegistrationCompleteEvent;
import com.ze031.fullstack.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@Slf4j
public class RegistrationCompleteEventListener implements ApplicationListener<RegistrationCompleteEvent> {

    @Autowired
    private UserService userService;


    @Override
    public void onApplicationEvent(RegistrationCompleteEvent event) {
        // Create the Verification Token for the User with Link
        User user = event.getUser();
        String token = UUID.randomUUID().toString();
        userService.saveVerificationTokenForUser(token, user);

        // Send Email to User
        String url = event.getApplicationUrl() + "verifyRegistration?token=" + token;
        log.info("Click the link to verify your account: {}", url);
    }
}
