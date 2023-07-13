import React, { useState } from 'react';
import './NewPlayList.css';

const NewPlayList = () => {
  const [playlistName, setPlaylistName] = useState('');

  const handleName = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleCreatePlayList = () => {
    
  };

  return (
    <div className="playlist-container">
      <h2>Create a Playlist</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={handleName}
      />
      <button onClick={handleCreatePlayList}>Create PlayList</button>
    </div>
  );
};

export default NewPlayList;



