import React from 'react';
import './Playlist1.css';
import {  FaEllipsisV, FaPlay, FaSpotify, FaHeadphones } from 'react-icons/fa';

const Playlist1 = () => {
const playsong = () => {
  
}

  return (
   
    <div className="body">
    <div className='listname'>
        <h2 style={{margin:"0px",padding:"40px 0 0 20px",alignItems:"center"}}><FaSpotify /> My Playlist</h2>
    </div>
    <div className='playmus'>
    <FaPlay size={20} style={{color:"black",padding:'5px'}} />&nbsp;
    <FaEllipsisV style={{color:"black",padding:'5px'}} size={20} />
   </div>
    <div className='song2'>
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
      <span><FaHeadphones />Song 1</span>
    </div>


    <div className=''>
      <span>Album 1</span>
    </div>
    <div className=''>
      <span>Artist 1</span>
    </div>

    <div className=''>
      <span>2:20</span>
    </div>

    </div>




    <div className='song1' onClick={playsong} draggable="true" >
    <div className=''>
      <span>2</span>
    </div>

    <div className=''>
      <span><FaHeadphones /> Song 2</span>
    </div>


    <div className=''>
      <span>Album 2</span>
    </div>
    <div className=''>
      <span>Artist 2 </span>
    </div>

    <div className=''>
      <span>2:20</span>
    </div>

    </div>





    </div>

    
   
   
      
      );
    };

    export default Playlist1;
