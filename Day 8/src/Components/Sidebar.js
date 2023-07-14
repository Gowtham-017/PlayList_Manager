import React, { useState,useEffect,useRef } from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom"
import { FaPlusSquare,FaUser,FaMusic,FaHome,FaBars,FaInstagram,FaTwitter,FaYoutube,FaFacebook,FaLinkedin, FaPlusCircle} from 'react-icons/fa';
import Playlist1 from '../Playlist1';
import Home from './Home';
import {useDispatch,useSelector} from 'react-redux';
import NewPlaylist from './NewPlayList';
const Sidebar = () => {

   // display home and playlist content
    const[open,setOpen]=useState(false);
    const[home,setHome]=useState(false);
    const handleOpenProfile = (e) => {
      setOpen(true);
      setHome(false);
    }; 
    const handleOpenHome = (e) => {
      setHome(true);
      setOpen(false);
    };
  

    // user profile in navbar
    const[openuser,setOpenUser]=useState(false);

    let menuRef = useRef();
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpenUser(false);
          console.log(menuRef.current);
        }      
      };
      document.addEventListener("mousedown", handler);
    });


    // popupdialog box
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpenPopup = () => {
      setIsOpen(true);
    };
    const handleClosePopup = () => {
      setIsOpen(false);
    };

        const [name, setName] = useState('');
        const handleChange = (event) => {
          setName(event.target.value);
        };
        const handlenamesubmit = () => {
          updateName(name);
        }
     
        // redux
        const handleName = (event) => {
          setPlaylistName(event.target.value);
        };
   
        // const dispatch=useDispatch();
        const[newname,setNewName]=useState('');
        const updateName = (name) => {
          setNewName(name);
        };

        const counter=useSelector((state)=>state.counter);
        const increment =()=>{
          dispatch({type:"INC"})
        }
        // const decrement =()=>{
        //   dispatch({type:"DEC"})
        // }
        const dispatch=useDispatch();
        
        // playlist
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
  <div className=''>
  
  {/* navigation bar */}
    <div className='nav'>
      <nav className='menu'>
        <div className='leftnav'>
            <FaHome style={{color:'white',margin:'12px 5px 10px 30px'}} onClick={handleOpenHome} size={35}/>
        </div>
        <div className='searchbar'> 
            <input type="text" placeholder="Search here" style={{padding:'10px 10px 10px 30px',width:'50%'}} onChange={''} className='search' value={''}  />
           
        </div>
        <h2 style={{color:'white',padding:'0 450px 0 0'}}>MUCIFY</h2>

        {/* user profile */}
        <div className='rightnav'>    
        <div className="profile">
        </div>
        <div className='menu-container' ref={menuRef}>
        <div className='' onClick={()=>{setOpenUser(!openuser)}}>
           <FaUser style={{color:'white',padding:" 9px 50px 4px 20px"}}  size={25}/>
        </div>
        {/* user profile sub contents */}
        <div className={`dropdown-menu ${openuser? 'active' : 'inactive'}`} >
          <ul>
            <Link to="UserProfile"><DropdownItem  text = {"Profile"}/></Link>
            <Link to="Signin"><DropdownItem  text = {"Logout"}/></Link>
          </ul>
        </div>
      </div>

        </div>
    </nav>
  </div>

    {/* sidebar contents */}
    <div className='sidebarsection'>
      <div className="homepage">
        {/* left side section */}
        <div className="leftsection">
          <div>
            <button className='head3'> <div className='head1'><FaBars size={16} />   Your PlayList    </div>  <div>  <FaPlusCircle size={25} onClick={handleOpenPopup} className='head2'/> </div></button>
          </div>

          {/* list of playlists */}
          <div>
            <div className='playlist'>
               <div className='ullist'>
                  {playlists.length === 0 ? (
                      <p style={{padding:'10px',marginLeft:'10px'}}>No playlists created yet</p>
                  ) : (
                      <ul className='newlists'>
                        {playlists.map((playlist, index) => (
                          <li key={index}><Link to=""><button  className='playbutton'> {playlist.name} {counter}</button></Link></li>
                        ))}
                      </ul>
                  )}
                </div>
              </div>
            </div>
          <div>
        </div>
      </div>


        {/* right section of home page */}
        <div className="rightsection">
            {!open && !home &&
            <div className='homebg'></div> 
            }
            {open &&
            <Playlist1 />
            }

            {home &&
              <NewPlaylist />
            }
            {

            }
            {/* popup container to create new list */}
            {isOpen && (
              <div className="popup-container">
                <div className="popup-content">
                  <h4>PlayList Name</h4>
                    <form className='formpop'>
                      <input type="text" value={playlistName} onChange={handlePlaylistNameChange} /><br />
                        <button type="button" onClick={handleCreatePlaylist} onClickCapture={increment}>Create</button>
                        <button onClick={handleClosePopup}>Close</button>
                    </form>
                </div>
              </div>
            )}
          </div>
        </div>

    </div>
      
        {/* footer in home page */}
        
          <div className='homefoot'>
                <a href="https://www.instagram.com/"><FaInstagram size={20} /></a>
                <a href="https://twitter.com/"><FaTwitter size={20} /></a>
                <a href="https://www.linkedin.com/"><FaLinkedin size={20} /></a>
                <a href="https://www.facebook.com/"> <FaFacebook size={20} /></a>
                <a href="https://www.youtube.com/"> <FaYoutube size={20}/></a>
                <h6>© 2023 Copyright: Mucify.com</h6>
          </div>
      
</div>
  );
};
export default Sidebar;

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

