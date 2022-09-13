package com.demo.grocery.controller;

import com.demo.grocery.model.Admin;
import com.demo.grocery.model.User;
import com.demo.grocery.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/admins")
public class AdminController {
    @Autowired
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Admin>> getAllAdmin(){
        List<Admin> admin=adminService.findAllAdmin();
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/find/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable("id") Long id){
        Admin admin=adminService.findAdminById(id);
        return new ResponseEntity<>(admin,HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Admin> updateAdmins(@PathVariable("id") Long id, @RequestBody Admin admin){
        Admin update = adminService.updateAdmin(admin);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Admin> addNewAdmin(@RequestBody Admin admin){
        Admin newAdmin=adminService.addAdmin(admin);
        return new ResponseEntity<>(newAdmin,HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAdmin(@PathVariable("id") Long id) {
        adminService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
