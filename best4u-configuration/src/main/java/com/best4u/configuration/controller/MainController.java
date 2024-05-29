package com.best4u.configuration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.best4u.configuration.entity.User;
import com.best4u.configuration.service.UserService;



@RestController
@CrossOrigin("http://localhost:3000")
public class MainController {

	@Autowired
	private UserService userService;
	
	
	@GetMapping("/users")
	public List<User> getAllUser(){
		return userService.getAllUser();
	}
	
	@PostMapping("/users")
	public User addUser(@RequestBody User user) {
		System.out.println(user.toString());
	 	return userService.addUser(user);
	}
	
	@PutMapping("/users")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/users/{id}")
	public int deleteUser(@PathVariable int id) {
		return userService.deleteUser(id);
	}
	
	@GetMapping("/users/{email}/{password}")
	public User getUserByEmail(@PathVariable String email,@PathVariable String password) {
		return userService.findUser(email,password);
		
	}
	
	@GetMapping("/users/{email}")
	public User findUserByEmail(@PathVariable String email) {
		//System.out.println(userService.findUserByEmail(email).toString());
		return userService.findUserByEmail(email);
		
	}
	
}
