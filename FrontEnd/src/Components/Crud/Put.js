import './Put.css';
import { Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import React, { useState } from 'react';

const Put = () => {
  const [songid, setSongId] = useState('');
  const [songname, setSongName] = useState('');
  const [songurl, setSongUrl] = useState('');
 
  const handleSongIdChange = (event) => {
    setSongId(event.target.value);
  };

  const handleSongNameChange = (event) => {
    setSongName(event.target.value);
  };

  const handleSongUrlChange = (event) => {
    setSongUrl(event.target.value);
  };


 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      songid,
      songname,
      songurl,
      
    };

    axios.put('http://localhost:8081/putsong', data)
      .then(() => {
        alert("Successfully Updated the Data");
      })
      .catch((error) => {
        console.log(error);
        alert("Error occurred while updating data");
      });
  };

  return (
    <div>
      

        <center><h2>Edit Song Details</h2></center>
      <div className='containerput'>
        <div className=''>
          <form onSubmit={handleSubmit}>

            <input type="text" className='inputput' placeholder='ID' value={songid} onChange={handleSongIdChange} /><br /><br />

            <input type="text" className='inputput' placeholder='Name' value={songname} onChange={handleSongNameChange} /><br /><br />

            <input type="text" className='inputput' placeholder='Songurl' value={songurl} onChange={handleSongUrlChange} /><br /><br />

           

           <input type="submit" className='buttonput' value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Put;
