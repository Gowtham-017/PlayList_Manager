import React from 'react';
import './Playlist1.css';
import { FaCloudMeatball, FaFilm, FaEllipsisV, FaOptinMonster, FaPlay, FaSpotify, FaHeadphones } from 'react-icons/fa';

const Playlist1 = () => {
const playsong = () => {
  
}

  return (
    <div className='body'>
    <div className="playlist-page">
      <nav className="navbar">
        <h1 className='playlistname'><FaSpotify /> My Playlist</h1>
      </nav>


    <div className='playmusic'>
    <FaPlay size={30} />&nbsp;
    <FaEllipsisV size={30} />
    </div>
    <br />
<div className='' >
<div className='song2' draggable="true" >
<div className=''>
  <span>SNo</span>
</div>


<div className=''>
  <span>Song</span>
</div>

<div className=''>
  <span>Album</span>
</div>
<div className=''>
  <span>Artist</span>
</div>

<div className=''>
  <span>Duration</span>
</div>
<div>
</div>

</div>



<div className='song1' onClick={playsong} draggable="true" >
<div className=''>
  <span>1</span>
</div>

<div className=''>
  <span><FaHeadphones /> <a href='https://open.spotify.com/track/6s6evoMsDwWqjTvqbvbs5F?si=f5dfcbc299964a7f'>Nilayo</a></span>
</div>


<div className=''>
  <span>Bairava</span>
</div>
<div className=''>
  <span>Pradeep</span>
</div>

<div className=''>
  <span>2:20</span>
</div>

</div>


<div className='song1' draggable="true" >
<div className='songrow'>
  <span>2</span>
</div>
<div className=''>
  <span><FaHeadphones /> Baby</span>
</div>

<div className=''>
  <span>Album</span>
</div>
<div className=''>
  <span>Justin</span>
</div>

<div className=''>
  <span>1:50</span>

</div>
</div>

</div>

{/*<div className="song-list">
        <div className="song-icon">
         <div className='songimg'></div>
          <p>Song 1</p>
        </div>
        <div className="song-icon">
        <div className='songimg'></div>
          <p>Song 2</p>
        </div>
        <div className="song-icon">
        <div className='songimg'></div>
          <p>Song 3</p>
        </div>
        Add more song icons as needed
      </div> */}

</div>
    </div>
  );
};

export default Playlist1;
