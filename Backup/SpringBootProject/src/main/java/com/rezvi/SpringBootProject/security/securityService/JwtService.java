package com.rezvi.SpringBootProject.security.securityService;

import com.rezvi.SpringBootProject.security.securityEntity.User;
import com.rezvi.SpringBootProject.security.securityRepository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    @Autowired
    private TokenRepository tokenRepository;
    private final String SECREAT_KEY = "d169552a202ace4ed9b31a326df08aemran3e197a10213030f7c4be596ba99b6";

    private Claims extractAllClaimsFromToken(String token) {
        return Jwts
                .parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey getSigninKey() {
        byte[] keyBytes = Decoders.BASE64URL.decode(SECREAT_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(User user) {
        String token = Jwts     // Building a JWT (JSON Web Token) using the JwtBuilder class
                .builder()
                .subject(user.getEmail())       //Settings the subject of the token to the user's email address.
                .issuedAt(new Date(System.currentTimeMillis()))         // Setting the time stamp when the token was issued to the current time.
                .expiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))     // Settings the expiration time of the token to 24 hours from the current time.
                .signWith(getSigninKey())       // Signing the token with a signing key obtained from a method called getSigninKey().
                .compact();

        return token;
    }

    // Extracts username from JWT token
    public String extractUsername(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    // Extract expiration date from the token
    private Date extractExpiration(String token) {
        return extractClaims(token, Claims::getExpiration);
    }

    // Checks if the token is expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Validates whether the token is valid for a given user
    public boolean isValidToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);

        boolean validToken = tokenRepository
                .findByToken(token)
                .map(t -> !t.isLogout())
                .orElse(false);

        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token) && validToken;
    }

    public <T> T extractClaims(String token, Function<Claims, T> claimsResolver) {
        Claims claims = extractAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }
}
