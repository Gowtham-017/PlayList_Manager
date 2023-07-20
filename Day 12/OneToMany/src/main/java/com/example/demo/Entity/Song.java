package com.example.demo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Songetails")
public class Song {
	@Id
	private int songid;
	private String songname;
	private String songurl;
	
	public int getSongid() {
		return songid;
	}

	public void setSongid(int songid) {
		this.songid = songid;
	}

	public String getSongname() {
		return songname;
	}

	public void setSongname(String songname) {
		this.songname = songname;
	}
	
	public String getSongurl() {
		return songurl;
	}

	public void setSongurl(String songurl) {
		this.songurl = songurl;
	}

	public Song(int songid, String songname, String songurl) {
		super();
		this.songid = songid;
		this.songname = songname;
		this.songurl = songurl;
	}

	public Song() {
		
	}

}
