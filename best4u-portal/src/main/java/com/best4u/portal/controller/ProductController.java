package com.best4u.portal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	
	@PostMapping("/products/")
	public ResponseEntity<?> uploadDetails(){
		
		
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
