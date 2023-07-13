import React, { useState,useEffect } from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom"
import { FaPlus,FaUser,FaMusic,FaHome,FaBars,FaInstagram,FaTwitter,FaYoutube,FaFacebook,FaLinkedin} from 'react-icons/fa';
import Playlist1 from '../Playlist1';
import Home from './Home';
// import Popup from './Popup';
import NewPlayList from './NewPlayList';
// import {CloseIcon} from '@material-ui/icons/Close';  
const Sidebar = () => {
    const[search,setSearch]=useState("");
    // const[open,setOpen]=useState(false);
    const Menus=["Profile","Settings","Logout"];
    const[isplay,setIsPlay]=useState(false);
    const[home,setHome]=useState(false);
    const[openPopup,setOpenPopup]=useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleOpenplayList = (e) => {
      setOpen(true);
      setHome(false);
    }; 
    const handleOpenHome = (e) => {
      setHome(true);
      setOpen(false);
    };

    // const handleCloseplayList = (e) => {
    //   setIsPlay(null);
    // };
    // const handleCloseHome = () => {
    //   setHome(null);
    // };

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };

    const handleOpenUser = () => {
      setOpen(current => !current);
    }
    const handleCloseUser = (event) =>{
      setOpen(null);
    }

    const handleCreate = () => {
      let playlistName = prompt("Please enter PlayList name");
        const display = () => {
          if (playlistName != null) {
            document.getElementById("demo").innerHTML =
            playlistName + "created successfully";
          }
        };
    };
    
    const handleSearch = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    
    if (searchInput.length > 0) {
        countries.filter((country) => {
        return country.name.match(searchInput);
    });
    }
    const countries = [

     
      { name: "Tanzania", continent: "Africa" },
      { name: "Bangladesh", continent: "Asia" },
      { name: "Portugal", continent: "Europe" },
      { name: "Pakistan", continent:"Asia" }
    
    ];


   const[open,setOpen]=useState(false);

    let menuRef = useRef();

    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      

    });


  return (
  <div className=''>

    <div className='nav'>
      <nav className='menu'>
        <div className='leftnav'>
            <FaHome style={{color:'white',margin:'12px 5px 10px 30px'}} onClick={handleOpenHome} size={35}/>
        </div>
        <div className='searchbar'> 
            {/* <input type="text" placeholder="Search here" style={{padding:'10px 10px 10px 30px',width:'50%'}} onChange={handleChange} className='search' value={search}  /> */}
            <input  type="search"  placeholder="Search here" onChange={handleSearch}  value={searchInput} />
        </div>
        <h2 style={{color:'white',padding:'0 450px 0 0'}}>Mucify</h2>

 
        <div className='rightnav'>    
        <div className="profile">
           <FaUser style={{color:'yellow',padding:" 9px 50px 4px 20px"}} onClick={handleOpenUser}  size={25}/>
        </div>
        {/* <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon><a href="/" style={{textDecoration:'none'}}>
          <div className='logout'>Logout</div></a>
        </MenuItem>
      </Menu> */}
      {/* <div className='bbb'>
        {
          open && (
            <ul className='profileelement'>
              {Menus.map((menu) => (
                <button key={menu} className='promenu' onClick={handleCloseUser} >{menu}</button>
                ))
              }
            </ul>
          )
        }
     </div>  */}


<div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} text = {"Inbox"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>



        </div>
    </nav>
  </div>


    <div className='sidebarsection'>
      <div className="homepage">
        <div className="leftsection">
          <div>
            <button className='head3'> <div className='head1'><FaBars size={16} />   Your PlayList </div>  <div>  <Link to="NewPlayList"><FaPlus onClick={() => setOpenPopup(true)} className='head2'/> </Link></div></button>
          </div>

          <div>
            <div className='playlist'>
               <div className='ullist'>
                  <button onClick={handleOpenplayList} className='playbutton'> <FaMusic /> PlayList 1</button> 
                  <button onClick={handleOpenplayList} className='playbutton'><FaMusic /> PlayList 2</button>
                  <button onClick={handleOpenplayList} className='playbutton'><FaMusic /> PlayList 3</button>
                </div>
             </div>
          </div>

      <div>

    </div>
  </div>

  <div className="rightsection">
    {open &&
     <Playlist1 />
    }

    {home &&
      <Home />
    }
  </div>
</div>


{/* <div className="social-icons">
        <a href="https://www.instagram.com/"><FaInstagram size={20} /></a>
        <a href="https://twitter.com/"><FaTwitter size={20} /></a>
        <a href="https://www.linkedin.com/"><FaLinkedin size={20} /></a>
       <a href="https://www.facebook.com/"> <FaFacebook size={20} /></a>
       <a href="https://www.youtube.com/"> <FaYoutube size={20}/></a>
      <h6>© 2023 Copyright: Company.com</h6>
</div> */}


</div>
        {/* <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <NewPlayList />
        </Popup> */}
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