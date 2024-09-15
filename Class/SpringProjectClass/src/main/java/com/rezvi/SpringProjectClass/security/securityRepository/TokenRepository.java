package com.rezvi.SpringProjectClass.security.securityRepository;

import com.rezvi.SpringProjectClass.security.securityEntity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, Integer> {
    Optional<Token> findByToken(String token);

    @Query("""
            SELECT t FROM Token t inner join User u on t.user.id = u.id
            where t.user.id = :userId and t.logout = false
            """)
    List<Token> findAllTokensByUserId(Long userId);
}
