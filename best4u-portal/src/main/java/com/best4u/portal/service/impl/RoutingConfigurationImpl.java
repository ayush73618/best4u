package com.best4u.portal.service.impl;

import org.springframework.http.ResponseEntity;

import com.best4u.domain.dto.Best4UResponse;
import com.best4u.domain.dto.UserDto;
import com.best4u.portal.service.RoutingConfiguration;

public class RoutingConfigurationImpl implements RoutingConfiguration {

	@Override
	public Best4UResponse<?> getUserDetail() {
		// TODO Auto-generated method stub
		 
		return null;
	}

	public Best4UResponse<?> addUser(UserDto userDto){
		
		return new Best4UResponse<>();
	}
	
}
