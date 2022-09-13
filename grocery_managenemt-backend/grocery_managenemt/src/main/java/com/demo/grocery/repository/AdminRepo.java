package com.demo.grocery.repository;


import com.demo.grocery.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {
    void deleteById(Long id);

    Optional<Admin> findAdminById(Long id);

}
