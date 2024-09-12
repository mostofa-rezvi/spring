package com.rezvi.SpringBootProject.security.securityService;

import com.rezvi.SpringBootProject.security.securityEntity.AuthenticationResponse;
import com.rezvi.SpringBootProject.security.securityEntity.Token;
import com.rezvi.SpringBootProject.security.securityEntity.User;
import com.rezvi.SpringBootProject.security.securityRepository.TokenRepository;
import com.rezvi.SpringBootProject.security.securityRepository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;

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

    public AuthenticationResponse register(User user) {

        // Check if the user already exists
        if (userRepository.findByEmail(user.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, "User already exists");
        }

        // Create a new user entity and save it to the database
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        // Generate JWT Token for the newly registered user
        String jwt = jwtService.generateToken(user);

        // Save the token to the token repository
        saveUserToken(jwt, user);

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
}
