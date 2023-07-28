package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Song;
import com.example.demo.Repository.SongRepo;

@CrossOrigin
@RestController
public class SongController {
	@Autowired
	public SongRepo song;
	
	@PostMapping("/postsong")
	public ResponseEntity<String> saveDet(@RequestBody Song e) {
		song.save(e);
		return  ResponseEntity.ok("Song Added");
	}
	@GetMapping("/getsong")
	public List<Song> getDetails() {
		return song.findAll();
	}
	@PutMapping("/putsong")
	public Song updateDetails(@RequestBody Song p1) {
		return song.saveAndFlush(p1);
	}
	@DeleteMapping("/deletesong/{songid}")
	public String deleteDetails(@PathVariable("songid") int songid) {
		song.deleteById(songid);
		return "Deleted song with songid:"+songid;
	}
	
}
