package com.NailShop.booking.user;

import com.NailShop.booking.model.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/sign-up")
    public void signUp(@RequestBody User user){

        userService.signUpUser(user);
        log.info("User is created " + user);
    }

    @PostMapping("/admin-signup")
    public void adminSignup(@RequestBody User user){
        userService.signUpAdmin(user);
        log.info("ADMIN is created " + user);
    }

    @GetMapping("/getUser")
    public String getUser(){
        return "HELLO WORLD";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getUsers();
    }

    @RequestMapping(path = "/sign-in")
    public String signIn(){
        return "sign-in.html";
    }


}
