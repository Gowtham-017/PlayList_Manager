package com.example.demo.Entity;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="PlayListDetail")
public class PlayList {
	@Id
	private int id;
	private String name;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_song")
	private List<Song> song;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Song> getSong() {
		return song;
	}

	public void setDept(List<Song> song) {
		this.song = song;
	}

	public PlayList(int id, String name, List<Song> song) {
		super();
		this.id = id;
		this.name = name;
		this.song = song;
	}

	public PlayList() {
		
	}

}
