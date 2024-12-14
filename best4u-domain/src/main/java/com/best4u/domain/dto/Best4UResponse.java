package com.best4u.domain.dto;

import java.io.Serializable;
import java.net.http.HttpHeaders;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class Best4UResponse<T> implements Serializable {
	private static final long serialVersionUID = 1L;
	private int Status;
	private String message;
	private T response;
	private HttpHeaders responseHeaders;
	
	
	public Best4UResponse(T response,int status) {
		this(status,"",response,null);
	}
	
	public Best4UResponse(int status, String message, T response, HttpHeaders responseHeaders) {
		super();
		Status = status;
		this.message = message;
		this.response = response;
		this.responseHeaders = responseHeaders;
	}
	public Best4UResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getStatus() {
		return Status;
	}
	public void setStatus(int status) {
		Status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getResponse() {
		return response;
	}
	public void setResponse(T response) {
		this.response = response;
	}
	public HttpHeaders getResponseHeaders() {
		return responseHeaders;
	}
	public void setResponseHeaders(HttpHeaders responseHeaders) {
		this.responseHeaders = responseHeaders;
	}
	
	
	

}
