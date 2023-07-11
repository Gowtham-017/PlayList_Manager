import React, { useState } from 'react';
import './Sidebar.css';
// import {Link} from "react-router-dom"
import { FaPlus,FaUser,FaMusic,FaHome,FaList} from 'react-icons/fa';
import Playlist1 from '../Playlist1';
import Home from './Home';
const Sidebar = () => {
    const[search,setSearch]=useState("");
    const[open,setOpen]=useState(false);
    const Menus=["Profile","Settings","Logout"];
    const[isShown,setIsShown]=useState(false);
    const[home,setHome]=useState(false);

    const handleplayList = () => {
      setIsShown(current => !current);
    };
    const handleHome = () => {
      setHome(current => !current);
    };
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };
     
  return (
        <div>

      <nav className='menu'>
   <FaHome className='navicon' onClick={handleHome} size={25}/> 
       <input type="text" placeholder="Search here" onChange={handleChange} className='search' value={search}  />
    


    <div className="profile">
      <FaUser className='navcon' onClick={()=>setOpen(!open)} size={25}/>
   
      {
        open && (
        <div className="">
            <ul className=''>
            {Menus.map((menu) => (
                    <li className='profilelist'   key={menu}>{menu}</li>
                ))}
            </ul>
        </div>
        )
      }
    </div>
 
    {/* <div className="profile">
        <button className='probtn'> </button>
        <div className="profile-content">
          <Link to="Home">Home</Link>
          <Link to="Home">Contact</Link>
          <Link to="Help">Help</Link>
        </div>
        </div> */}

   </nav>
    




    <div className="homepage">
      <div className="leftsection">
        <div className='yourplay'>
        <div className='header'>
        <button className='listhead'><span className='listicon'>
        <FaList className='listicon' size={16} />    
        &nbsp; Your PlayList
          </span></button>
      <button className='addhead'>
      <span className='listicon'>
        <span> <FaPlus className='listicon'/></span>
      </span>
      </button>
      </div>

      <div>
        <div className='playlist'>
          <div className='ullist'>
            <ul>
             
            <button onClick={handleplayList} className='playbutton'> <FaMusic /> PlayList 1</button> 
                <button onClick={handleplayList} className='playbutton'><FaMusic /> PlayList 2</button>
                <button onClick={handleplayList} className='playbutton'><FaMusic /> PlayList 3</button>
             
            </ul>
          </div>
        </div>
      </div>
</div>


<div>



</div>
      </div>







      <div className="home1page">
        {isShown && (
        <div className='homee'>
        
          <Playlist1 />
        </div>
      )}


    {home && (
        <div>
         <Home />
        </div>
      )}
       
      </div>
</div>
    </div>
  );
};

export default Sidebar;