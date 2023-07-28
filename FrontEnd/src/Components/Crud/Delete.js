import './Delete.css';
import { Link } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

const Post = () => {
  // const [songid, setSongId] = useState('');
  
 
  const handleSongIdChange = (event) => {
    setSongId(event.target.value);
  };

 
  

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = {
  //     songid,
     
    
  //   };

  //   try {
  //     await axios.post(`http://localhost:8080/deleteplay/${songid}`);
  //     alert("Successfully deleted the Data");
  //   } catch (error) {
  //     console.log(error);
  //     alert("Error occurred while deleting data");
  //   }
  // };
  const [songid,setSongId]=useState("");
  const deleteId=(evt)=>{
          axios.delete(`http://localhost:8081/deletesong/${songid}`)
          .then( alert("Deleted Song Details"))
          .catch(err=>console.log(err))
  }

  return (
    <div className='' >

   
    
       <h1>Delete Song Details</h1><br />
    
          <form className='containerdelete' >

            <input type="text" className='inputdelete' placeholder='SongId' value={songid} onChange={e=>setSongId(e.target.value)} /><br /><br />

         
          
            <br />
            <input type="button" className='buttondelete' onClick={deleteId}value="Submit"></input>
          </form>
        </div>
     

  );
};

export default Post;
