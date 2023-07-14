import React, { useState } from 'react';
import './NewPlayList.css';
import SearchBar from './SearchBar';
import Content from './Content';
const NewPlaylist = (onSearch) => {
  
  const [songs, setSongs] = useState([]);
  const [songName, setSongName] = useState('');

  const handleSongInputChange = (event) => {
    setSongName(event.target.value);
  };

  const handleAddSong = () => {
    if (songName) {
      const newSong = { name: songName };
      setSongs([...songs, newSong]);
      setSongName('');
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
 
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div className="new-playlist">
    <div >
      <center><h1>NewPlayList</h1></center>
     </div>

     <div>
    
      <form className="search-form" onSubmit={''}>
        
        <input type="text" placeholder="Search for songs..."  value={searchTerm} onChange={handleInputChange} />
       
      </form>

      

      {/* <input type="text" value={songName} onChange={handleSongInputChange} />
      <button onClick={handleAddSong}>Add</button>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.name}</li>
        ))}
      </ul> */}

      
      <SearchBar onSearch={handleSearch} />
      <Content searchTerm={searchTerm} />
    </div>
    </div>














  );
};

export default NewPlaylist;







