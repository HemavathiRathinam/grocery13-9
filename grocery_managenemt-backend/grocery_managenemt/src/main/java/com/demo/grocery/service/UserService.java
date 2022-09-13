package com.demo.grocery.service;

import com.demo.grocery.exception.UserNotFoundException;
import com.demo.grocery.model.User;
import com.demo.grocery.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    public User addUser(User user) {
        return userRepo.save(user);
    }

    public List<User> findAllUser() {return userRepo.findAll(); }

    public User updateUser(User user){ return userRepo.save(user); }
    public User fetchEmailById(String email){
        return userRepo.findByEmailId(email);
    }

    public User fetchEmailAndPasswordById(String email,String password){
        return userRepo.findByEmailAndPassword(email,password);
    }
    public User findUserById(Long id){
        return userRepo.findUserById(id)
                .orElseThrow(()-> new UserNotFoundException("User by id "+id+" was not found"));
    }
    public void deleteById(Long id){ userRepo.deleteById(id);}


}
