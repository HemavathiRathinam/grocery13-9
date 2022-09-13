package com.demo.grocery.repository;

import com.demo.grocery.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepo extends JpaRepository<Payment, Long> {
        void deleteById(Long id);

        Optional<Payment> findPaymentById(Long id);

        }


