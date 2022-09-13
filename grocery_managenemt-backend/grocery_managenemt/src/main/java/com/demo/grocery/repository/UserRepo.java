package com.demo.grocery.repository;

import com.demo.grocery.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    void deleteById(Long id);

    Optional<User> findUserById(Long id);

    @Query("select u from User u where u.email = ?1")
    User findByEmailId(String email);

    @Query("select u from User u where u.email = ?1 and u.password=?2")
    User findByEmailAndPassword(String email, String password);
}
