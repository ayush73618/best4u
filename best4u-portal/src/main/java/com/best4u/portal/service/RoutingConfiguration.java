package com.best4u.portal.service;

import org.springframework.http.ResponseEntity;

import com.best4u.domain.dto.Best4UResponse;
import com.best4u.domain.dto.UserDto;

public interface RoutingConfiguration {
	
	public Best4UResponse<?> getUserDetail();
	public Best4UResponse<?> addUser(UserDto userDto);

}
