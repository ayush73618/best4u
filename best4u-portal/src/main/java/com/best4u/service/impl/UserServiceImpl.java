package com.best4u.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.best4u.entity.User;
import com.best4u.persistence.UserDao;
import com.best4u.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	
	@Autowired
	private UserDao userDao;
	
	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return userDao.save(user);
		
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return userDao.saveAndFlush(user);
	}

	@SuppressWarnings("deprecation")
	@Override
	public int deleteUser(int id) {
		// TODO Auto-generated method stub
		Optional<User> user = Optional.of(userDao.getById(id));
		
		if(user!=null) {
			 userDao.deleteById(id);
			 return 1;
		}
		
		return -1;
	}

	@Override
	public User findUser(String email, String password) {
		// TODO Auto-generated method stub
		return userDao.findByEmailAndPassword(email, password);
	}

	@Override
	public User findUserByEmail(String email) {
		// TODO Auto-generated method stub
	   return userDao.findByEmail(email);
	}

}
