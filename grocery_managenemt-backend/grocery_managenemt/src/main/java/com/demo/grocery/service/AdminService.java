package com.demo.grocery.service;

import com.demo.grocery.exception.UserNotFoundException;
import com.demo.grocery.model.Admin;
import com.demo.grocery.model.User;
import com.demo.grocery.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AdminService {
    private final AdminRepo adminRepo;

    @Autowired
    public AdminService(AdminRepo adminRepo) {
        this.adminRepo = adminRepo;
    }

    public Admin addAdmin(Admin admin){
        return adminRepo.save(admin);
    }
    public List<Admin> findAllAdmin() {return adminRepo.findAll(); }

    public Admin updateAdmin(Admin admin){ return adminRepo.save(admin); }
    public Admin findAdminById(Long id){
        return adminRepo.findAdminById(id)
                .orElseThrow(()-> new UserNotFoundException("Admin by id "+id+" was not found"));
    }
    public void deleteById(Long id){ adminRepo.deleteById(id);}
}
