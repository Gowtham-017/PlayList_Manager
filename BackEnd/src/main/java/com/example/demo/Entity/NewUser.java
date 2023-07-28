package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="newusers")
public class NewUser {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int usersid;
	@Column
	private String usersname;
	@Column
	private String usersemail;
	@Column
	private String userspassword;
	@Column
	private String usersphone;

	

	public int getUsersid() {
		return usersid;
	}



	public void setUsersid(int usersid) {
		this.usersid = usersid;
	}



	public String getUsersname() {
		return usersname;
	}



	public void setUsersname(String usersname) {
		this.usersname = usersname;
	}



	public String getUsersemail() {
		return usersemail;
	}



	public void setUsersemail(String usersemail) {
		this.usersemail = usersemail;
	}



	public String getUserspassword() {
		return userspassword;
	}



	public void setUserspassword(String userspassword) {
		this.userspassword = userspassword;
	}



	public String getUsersphone() {
		return usersphone;
	}



	public void setUsersphone(String usersphone) {
		this.usersphone = usersphone;
	}



	public NewUser(int usersid, String usersname, String usersemail, String userspassword, String usersphone) {
		super();
		this.usersid = usersid;
		this.usersname = usersname;
		this.usersemail = usersemail;
		this.userspassword = userspassword;
		this.usersphone = usersphone;
	}



	public NewUser() {
		
	}


}
