package com.demo.grocery.model;

import javax.persistence.*;

@Entity
@Table(name="admins")
public class Admin {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String email;
    private String username;
    private String mobile;
    private String password;

    public Admin() {
    }

    public Admin(long id, String email, String username, String mobile, String password) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.mobile = mobile;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", mobile='" + mobile + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
