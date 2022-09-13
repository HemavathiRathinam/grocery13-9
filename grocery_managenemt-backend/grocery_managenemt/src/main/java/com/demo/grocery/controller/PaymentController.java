package com.demo.grocery.controller;

import com.demo.grocery.model.Payment;
import com.demo.grocery.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {
    @Autowired
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Payment>> getAllUser(){
        List<Payment> user=paymentService.findAllUser();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/find/{id}")
    public ResponseEntity<Payment> getUserById(@PathVariable("id") Long id){
        Payment user=paymentService.findPaymentById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Payment> updateUsers(@PathVariable("id") Long id,@RequestBody Payment user){
        Payment update = paymentService.updateUser(user);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Payment> addNewUser(@RequestBody Payment user){
        Payment newUser=paymentService.addUser(user);
        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        paymentService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
