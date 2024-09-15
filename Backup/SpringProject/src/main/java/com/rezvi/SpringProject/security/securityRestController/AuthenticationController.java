package com.rezvi.SpringProject.security.securityRestController;

import com.rezvi.SpringProject.security.securityEntity.AuthenticationResponse;
import com.rezvi.SpringProject.security.securityEntity.User;
import com.rezvi.SpringProject.security.securityService.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User user
            ) {
        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody User user
    ){
        return ResponseEntity.ok(authService.authenticate(user));
    }

    public ResponseEntity<String> activateUser(@RequestParam("id") long id) {
        String response = authService.activateUser(id);
        return ResponseEntity.ok(response);
    }

}
