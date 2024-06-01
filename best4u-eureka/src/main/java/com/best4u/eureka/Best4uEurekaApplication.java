package com.best4u.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;



@SpringBootApplication
@EnableDiscoveryClient
@EnableEurekaServer
public class Best4uEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(Best4uEurekaApplication.class, args);
	}

}
