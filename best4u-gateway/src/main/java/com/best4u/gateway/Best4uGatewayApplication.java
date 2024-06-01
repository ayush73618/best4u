package com.best4u.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class Best4uGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(Best4uGatewayApplication.class, args);
	}

}
