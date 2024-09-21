package com.rezvi.springbootproject.repository;

import com.rezvi.springbootproject.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, Integer> {

    Optional<Token> findByToken(String token);

    @Query("""
            select t from Token t inner join UserEntity u on t.userEntity.id = u.id
            where t.userEntity.id = :userId and t.logout = false
            """)
    List<Token> findAllTokensByUser(Long userId);
}
