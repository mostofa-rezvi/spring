package com.rezvi.springbootproject.restController;

import com.rezvi.springbootproject.entity.AuthenticationResponse;
import com.rezvi.springbootproject.entity.UserEntity;
import com.rezvi.springbootproject.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody UserEntity userEntity
    ) {
        return ResponseEntity.ok(authService.register(userEntity));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody UserEntity userEntity
    ) {
        return ResponseEntity.ok(authService.authenticate(userEntity));
    }

    @GetMapping("/activate/{id}")
    public ResponseEntity<String> activateUser(@PathVariable("id") long id) {
        String response = authService.activateUser(id);
        return ResponseEntity.ok(response);
    }
}
