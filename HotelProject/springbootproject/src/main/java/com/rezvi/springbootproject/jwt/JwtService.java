package com.rezvi.springbootproject.jwt;

import com.rezvi.springbootproject.entity.UserEntity;
import com.rezvi.springbootproject.repository.TokenRepository;
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

    private final String SECREAT_KEY = "d169552a202ace4ed9b31a326df08a2aa723e197a10213030f7c4be596ba99b6";

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .verifyWith(getSigninKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private SecretKey getSigninKey() {
        byte[] keyBytes = Decoders.BASE64URL.decode(SECREAT_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(UserEntity userEntity) {

        return Jwts
                .builder()
                .subject(userEntity.getEmail())
                .claim("role", userEntity.getRole())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
                .signWith(getSigninKey())
                .compact();
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    public boolean isValid(String token, UserDetails user) {
        String username = extractUsername(token);

        boolean validToken = tokenRepository
                .findByToken(token)
                .map(t -> !t.isLogout())
                .orElse(false);

        return (username.equals(user.getUsername())) && !isTokenExpired(token) && validToken;
    }

    public String extractUserRole(String token) {
        return extractClaim(token, claims -> claims.get("role", String.class));
    }
}