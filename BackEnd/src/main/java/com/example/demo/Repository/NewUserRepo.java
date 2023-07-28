package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.NewUser;

public interface NewUserRepo extends JpaRepository<NewUser,Integer> {
	 boolean existsByUsersemail(String usersemail);
	 boolean existsByUserspassword(String userspassword);
	NewUser findByUsersemailAndUserspassword(String usersemail, String userspassword);
}
