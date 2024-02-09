package com.best4u.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.best4u.entity.User;

@Service
public interface UserService {
	
	public List<User> getAllUser();
	public User addUser(User user);
	public User updateUser(User user);
	public int deleteUser(int id);
	public User findUser(String email,String password);
	public User findUserByEmail(String email);

}
