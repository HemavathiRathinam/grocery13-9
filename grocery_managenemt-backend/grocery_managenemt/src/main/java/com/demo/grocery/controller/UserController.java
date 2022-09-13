package com.demo.grocery.controller;

import com.demo.grocery.model.User;
import com.demo.grocery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>>getAllUser(){
        List<User> user=userService.findAllUser();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id){
       User user=userService.findUserById(id);
       return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUsers(@PathVariable("id") Long id,@RequestBody User user){
        User update = userService.updateUser(user);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<User> addNewUser(@RequestBody User user) throws Exception{
        String tempEmailId=user.getEmail();
        if(tempEmailId!=null && !"".equals(tempEmailId)){
            User user1= userService.fetchEmailById(tempEmailId);
            if(user1!=null){
                throw new Exception("user with "+tempEmailId+" already exist");
            }
        }
        User user1=null;
        user1=userService.addUser(user);
        return new ResponseEntity<>(user1,HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) throws Exception{
        String tempEmailId=user.getEmail();
        String tempPass=user.getPassword();
        User userObj=null;
        if(tempEmailId!=null && tempPass!=null){
            userObj= userService.fetchEmailAndPasswordById(tempEmailId,tempPass);
            if(userObj==null){
                throw new Exception("bad credentials");
            }
        }
        return userObj;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
