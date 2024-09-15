package com.rezvi.SpringProjectClass.security.securityService;

import com.rezvi.SpringProjectClass.security.securityEntity.AuthenticationResponse;
import com.rezvi.SpringProjectClass.security.securityEntity.Role;
import com.rezvi.SpringProjectClass.security.securityEntity.Token;
import com.rezvi.SpringProjectClass.security.securityEntity.User;
import com.rezvi.SpringProjectClass.security.securityRepository.TokenRepository;
import com.rezvi.SpringProjectClass.security.securityRepository.UserRepository;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final EmailService emailService;

    private void saveUserToken(String jwt, User user) {
        Token tokenEntity = new Token();
        tokenEntity.setToken(jwt);
        tokenEntity.setLogout(false);
        tokenEntity.setUser(user);
        tokenRepository.save(tokenEntity);
    }

    private void revokeAllTokenByUser(User user) {
        List<Token> validTokens = tokenRepository.findAllTokensByUserId(user.getId());
        if (validTokens.isEmpty()) {
            return;
        }

        // Set all valid tokens for the user to logged out
        validTokens.forEach(t -> {
            t.setLogout(true);
        });

        // Save the changes to the tokens in the token repository
        tokenRepository.saveAll(validTokens);
    }







    // When u create multiple user watch video - Spring Boot Project Part 13










    public AuthenticationResponse register(User user) {

        // Check if the user already exists
        if (userRepository.findByEmail(user.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "User already exists");
        }

        // Create a new user entity and save it to the database
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.valueOf("USER"));
        user.setActive(false);

        userRepository.save(user);

        // Generate JWT Token for the newly registered user
        String jwt = jwtService.generateToken(user);

        // Save the token to the token repository
        saveUserToken(jwt, user);
        sendActivationEmail(user);

        return new AuthenticationResponse(jwt, "User registration is successful.");
    }


    public AuthenticationResponse authenticate(User user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(),
                        user.getPassword()
                )
        );

        User userEntity = userRepository.findByEmail(user.getUsername()).orElseThrow();

        String jwt = jwtService.generateToken(userEntity);

        revokeAllTokenByUser(userEntity);

        saveUserToken(jwt, user);

        return new AuthenticationResponse(jwt, "User authentication is successful.");
    }

    private void sendActivationEmail(User user) {
        String activationUrl = "http://localhost:8080/activate/" + user.getId();

        String mailText = "<h3>Dear "
                + user.getName()
                + ",</h3>"
                + "<p>Please click on the following link to confirm your account:</p>"
                + "<a href=\"" + activationUrl + "\">Activate Account</a>"
                + "<br><br>Regards,<br>Hotel Booking";


        String subject = "Activation Email";

        try {
            emailService.sendSimpleMail(user.getEmail(), subject, activationUrl);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public String activateUser(long id) {

        User userOptional = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found."));

        if (userOptional != null) {

            userOptional.setActive(true);

            userRepository.save(userOptional);

//            user.setActivationToken(null);

            return "User activated successfully";
        } else {
            return "Invalid activation token";
        }
    }
}
