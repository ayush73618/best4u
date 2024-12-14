package com.best4u.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.support.HttpAccessor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.best4u.domain.dto.Best4UResponse;
import com.best4u.domain.dto.UserDto;
import com.best4u.portal.service.RoutingConfiguration;


@RestController
public class UserController {
	
	
	@Autowired
	private RoutingConfiguration routingConfig;
	
	@PostMapping("/user")
	public ResponseEntity<Best4UResponse<?>> addUser(@RequestBody UserDto userDto){
		
		final Best4UResponse<?> response = routingConfig.addUser(userDto);
		
		return new ResponseEntity<>(response,HttpStatus.OK);
		
	}

}
