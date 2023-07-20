package com.example.demo.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name="UserDetail")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userid;
	private String username;
	private String usermail;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUsermail() {
		return usermail;
	}
	public void setUsermail(String usermail) {
		this.usermail = usermail;
	}
	public User(int userid, String username, String usermail) {
		super();
		this.userid = userid;
		this.username = username;
		this.usermail = usermail;
	}
	
	public User() {
		
	}
	





}
