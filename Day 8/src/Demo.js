import React, { useState } from 'react';

const PlaylistCreator = () => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    if (playlistName.trim() !== '') {
      const newPlaylist = { name: playlistName };
      setPlaylists([...playlists, newPlaylist]);
      setPlaylistName('');
    }
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div>
      
      <input
        type="text"
        value={playlistName}
        onChange={handlePlaylistNameChange}
        placeholder="Enter playlist name"
      />
      <button onClick={handleCreatePlaylist}>Create</button>
      
      <h2>Created Playlists:</h2>
      {playlists.length === 0 ? (
        <p>No playlists created yet.</p>
      ) : (
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>{playlist.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistCreator;
