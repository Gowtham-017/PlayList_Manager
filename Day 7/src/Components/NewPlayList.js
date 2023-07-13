import React, { useState } from 'react';
import './NewPlayList.css';
import {useDispatch,useSelector} from 'react-redux';

const NewPlayList = () => {
  const [playlistName, setPlaylistName] = useState('');

  const handleName = (event) => {
    setPlaylistName(event.target.value);
  };


  const counter=useSelector((state)=>state.counter);
  const increment =()=>{
    dispatch({type:"INC"})
  }
  // const decrement =()=>{
  //   dispatch({type:"DEC"})
  // }
  const dispatch=useDispatch();

  return (
    <div className="playlist-container">
      <h2>Create a Playlist</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={handleName}
      />
     {counter}
      <button onClick={increment}>Create PlayList</button>
    </div>
  );
};

export default NewPlayList;



