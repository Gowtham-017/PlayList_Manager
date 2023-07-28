package com.example.demo.Controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepo;

@CrossOrigin
@RestController
public class UserController {
	@Autowired
	public UserRepo user;
	
//	@PostMapping("/postuser")
//	public ResponseEntity<String> saveUse(@RequestBody User e) {
//		user.save(e);
//		return  ResponseEntity.ok("User Added");
//	}
	
	@PostMapping("/postuser")
	public ResponseEntity<String> saveUse(@RequestBody User e) {
	    try {
	        user.save(e);
	        return ResponseEntity.ok("User Added");
	    } catch (Exception ex) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding user: " + ex.getMessage());
	    }
	}

	
	@GetMapping("/getuser")
	public List<User> getDetails() {
		return user.findAll();
	}
	@DeleteMapping("/deleteuser/{userid}")
	public String deleteDetails(@PathVariable("userid") int userid) {
		user.deleteById(userid);
		return "Deleted user with userid:"+userid;
	}
}
