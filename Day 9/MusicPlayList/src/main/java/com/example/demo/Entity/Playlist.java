//package com.example.demo.Entity;
//
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Setter
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name="PlaylistDetails")
//public class Playlist {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	private String playname;
//	
//	
//	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "playlist")
//	private List<Song> song;
//
//}






package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PlaylistDetails")
public class Playlist {
	@Id
	private int id;
	private String playname;
	private String genre;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPlayname() {
		return playname;
	}
	public void setPlayname(String playname) {
		this.playname = playname;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public Playlist(int id, String playname, String genre) {
		super();
		this.id = id;
		this.playname = playname;
		this.genre = genre;
	}
	public Playlist() {
		
	}
	public String toString() {
		return "id="+id+"playname="+playname+"genre="+genre;
	}

}

