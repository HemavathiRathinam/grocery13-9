package com.demo.grocery.service;

import com.demo.grocery.exception.UserNotFoundException;
import com.demo.grocery.model.Payment;
import com.demo.grocery.model.User;
import com.demo.grocery.repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentService {
    private final PaymentRepo paymentRepo;

    @Autowired
    public PaymentService(PaymentRepo paymentRepo) {
        this.paymentRepo = paymentRepo;
    }


    public Payment addUser(Payment user) {
        return paymentRepo.save(user);
    }

    public List<Payment> findAllUser() {return paymentRepo.findAll(); }

    public Payment updateUser(Payment user){ return paymentRepo.save(user); }
    public Payment findPaymentById(Long id){
        return paymentRepo.findPaymentById(id)
                .orElseThrow(()-> new UserNotFoundException("User by id "+id+" was not found"));
    }
    public void deleteById(Long id){ paymentRepo.deleteById(id);}
}
