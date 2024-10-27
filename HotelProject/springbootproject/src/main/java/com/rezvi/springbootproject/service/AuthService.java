package com.rezvi.springbootproject.service;

import com.rezvi.springbootproject.entity.AuthenticationResponse;
import com.rezvi.springbootproject.entity.Role;
import com.rezvi.springbootproject.entity.Token;
import com.rezvi.springbootproject.entity.UserEntity;
import com.rezvi.springbootproject.jwt.JwtService;
import com.rezvi.springbootproject.repository.TokenRepository;
import com.rezvi.springbootproject.repository.UserRepository;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
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

    private void saveUserToken(String jwt, UserEntity userEntity) {
        Token token = new Token();
        token.setToken(jwt);
        token.setLogout(false);
        token.setUserEntity(userEntity);

        tokenRepository.save(token);
    }

    private void revokeAllTokenByUser(UserEntity userEntity) {
        List<Token> validTokens = tokenRepository.findAllTokensByUser(userEntity.getId());
        if (validTokens.isEmpty()) {
            return;
        }

        validTokens.forEach(t -> {
            t.setLogout(true);
        });

        tokenRepository.saveAll(validTokens);
    }

    // userEntity act like - request variable
    public AuthenticationResponse register(UserEntity userEntity) {

        if (userRepository.findByEmail(userEntity.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "User already exists");
        }

        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));

        userEntity.setRole(Role.valueOf("USER"));
        userEntity.setLock(true);
        userEntity.setActive(false);

        userRepository.save(userEntity);

        String jwt = jwtService.generateToken(userEntity);

        saveUserToken(jwt, userEntity);

        sendActivationEmail(userEntity);

        return new AuthenticationResponse(jwt, "User registration was successful");
    }

    public AuthenticationResponse registerAdmin(UserEntity userEntity) {
        if (userRepository.findByEmail(userEntity.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "User already exists.");
        }

        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setRole(Role.valueOf("ADMIN"));
        userEntity.setLock(true);
        userEntity.setActive(false);

        userRepository.save(userEntity);

        String jwt = jwtService.generateToken(userEntity);

        saveUserToken(jwt, userEntity);
        sendActivationEmail(userEntity);

        return new AuthenticationResponse(jwt, "User registration was successful");
    }

    public AuthenticationResponse registerHotel(UserEntity userEntity) {
        if (userRepository.findByEmail(userEntity.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "User already Exists.");
        }

        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setRole(Role.valueOf("HOTEL"));
        userEntity.setLock(false);
        userEntity.setActive(false);

        userRepository.save(userEntity);

        String jwt = jwtService.generateToken(userEntity);

        saveUserToken(jwt, userEntity);
        sendActivationEmail(userEntity);

        return new AuthenticationResponse(jwt, "User registration was successful.");
    }

    public AuthenticationResponse authenticate(UserEntity userEntity) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userEntity.getUsername(),
                        userEntity.getPassword()
                ));

        UserEntity user = userRepository.findByEmail(userEntity.getUsername()).orElseThrow();

        String jwt = jwtService.generateToken(user);

        revokeAllTokenByUser(user);
        saveUserToken(jwt, user);

        return new AuthenticationResponse(jwt, "User login was successful");
    }

    private void sendActivationEmail(UserEntity userEntity) {
        String activationLink = "http://localhost:8080/activate/" + userEntity.getId();

        String mailText = "<h3>Dear " + userEntity.getName()
                + ",</h3>"
                + "<p>Please click on the following link to confirm your account:</p>"
                + "<a href=\"" + activationLink + "\">Activate Account</a>"
                + "<br><br>Regards,<br>Hotel Booking";

        String subject = "Confirm User Account";

        try {
            emailService.sendSimpleEmail(userEntity.getEmail(), subject, mailText);
        } catch (MessagingException exception) {
            throw new RuntimeException(exception);
        }
    }

    public String activateUser(long id) {
        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with this id"));

        if (userEntity != null) {
            userEntity.setActive(true);
            userRepository.save(userEntity);

            return "User activated successfully!";
        } else {
            return "Invalid activation token!";
        }
    }
}
