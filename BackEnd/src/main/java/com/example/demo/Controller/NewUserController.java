package com.example.demo.Controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.NewUser;
import com.example.demo.Repository.NewUserRepo;




@CrossOrigin
//@RequestMapping("/api/v1/users")
@RestController
public class NewUserController {
	@Autowired
	public NewUserRepo newuser;
	
	
	
	@PostMapping("/postnewuser")
	public ResponseEntity<String> saveUse(@RequestBody NewUser e) {
	    try {
	        newuser.save(e);
	        return ResponseEntity.ok("User Added");
	    } catch (Exception ex) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding user: " + ex.getMessage());
	    }
	}

	
	@GetMapping("/getnewuser")
	public List<NewUser> getDetails() {
		return newuser.findAll();
	}
	@DeleteMapping("/deletenewuser/{newuserid}")
	public String deleteDetails(@PathVariable("newuserid") int newuserid) {
		newuser.deleteById(newuserid);
		return "Deleted user with newuserid:"+newuserid;
	}
	
	 @GetMapping("/checkuser/{usersemail}")
	    public ResponseEntity<Map<String, Boolean>> checkUserExistence(@PathVariable("usersemail") String usersemail) {
	        boolean exists = newuser.existsByUsersemail(usersemail);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("exists", exists);
	        return ResponseEntity.ok(response);
	    }
	 
	
	 
	 
	
	
}
