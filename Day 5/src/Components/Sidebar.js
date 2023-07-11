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
        <div className=''>
<div className='appbody'>
      <nav className='menu'>


        <div className='leftnav'>
          <FaHome style={{color:'white',margin:'12px 5px 10px 30px'}} onClick={handleHome} size={35}/> </div>
         <div className='searchbar'> 
          <input type="text" placeholder="Search here" style={{padding:'10px 10px 10px 30px',width:'50%'}} onChange={handleChange} className='search' value={search}  />
       </div>
 

   <div className='rightnav'>
    <div className="profile">
      <FaUser style={{color:'yellow',padding:" 9px 50px 4px 20px"}} onClick={()=>setOpen(!open)} size={25}/>
   </div>
      {
        open && (
        <div className="profilelist">
            <ul className='profileele'>
            {Menus.map((menu) => (
                    <li className=''   key={menu}>{menu}</li>
                ))}
            </ul>
        </div>
        )
      }
      </div>


   </nav>



</div>
    
    


<div className='sidebarsection'>

    <div className="homepage">
      <div className="leftsection">
     

    
      <div>
        <button className='head3'> <div className='head1'><FaList size={16} />  Your PlayList </div>  <div>  <FaPlus className='head2'/> </div></button>
      </div>

   
      <div>
        <div className='playlist'>
          <div className='ullist'>
            
             
            <button onClick={handleplayList} className='playbutton'> <FaMusic /> PlayList 1</button> 
                <button onClick={handleplayList} className='playbutton'><FaMusic /> PlayList 2</button>
                <button onClick={handleplayList} className='playbutton'><FaMusic /> PlayList 3</button>
             
            
          </div>
        </div>
</div>


<div>



</div>
      </div>







      <div className="rightsection">
        {isShown && (
        <div className='homee'>
        
          <Playlist1 />
        </div>
      )}


    {!isShown && home && (
        <div>
         <Home />
        </div>
      )}
       </div>
      </div>
</div>
    </div>
  );
};

export default Sidebar;