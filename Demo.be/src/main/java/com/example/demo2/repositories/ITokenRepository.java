package com.example.demo2.repositories;

import com.example.demo2.models.TokenModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ITokenRepository extends JpaRepository<TokenModel, Integer> {
    @Query(value = """
      select t from TokenModel t inner join UserModel u\s
      on t.user.user_id = u.user_id\s
      where u.user_id = :id and (t.expired = false or t.revoked = false)\s
      """)
    List<TokenModel> findAllValidTokenByUser(Integer id);

    Optional<TokenModel> findByToken(String token);
}
