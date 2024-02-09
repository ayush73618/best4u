package com.best4u.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.best4u.entity.User;

public interface  UserDao extends JpaRepository<User, Integer> {
	
	public User findByEmailAndPassword(String email,String password);
	
	public User findByEmail(String email);

}
