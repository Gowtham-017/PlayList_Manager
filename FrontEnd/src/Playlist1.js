import React, { useState,useEffect,useRef } from 'react';
import './Playlist1.css';
import {FaEllipsisV, FaPlay,FaPause, FaSpotify,FaHeart} from 'react-icons/fa';
import {Link} from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from './store';
import Post from './Components/Crud/Post';
import { RWebShare } from "react-web-share";
import Songurl from './Songurl.mp3'
import Summertime from './Summertime.mp3'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Slider from './Components/slider/Slider'
import ControlPanel from './Components/controls/ControlPanel'
import Share  from './Components/Share';
const Playlist1 = () => {

  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
 



 
  const audioRef = useRef()
  
  
  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }
  // redux
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state);

  const handleLike = (songId) => {
    dispatch(toggleLike(songId));
  };
  //open edit menu
  const[openedit,setOpenEdit]=useState(false);
  let editRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!editRef.current.contains(e.target)){
        setOpenEdit(false);
        console.log(editRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
  });


  //axios

  const[addData,setAddData]=useState({});
  const[editData,setEditData]=useState({});
  
  const[getData,setGetData]=useState([]);
  useEffect ( () => {
    apiFetch();
  },[]);

  let apiFetch = async () => {
    let res=await axios.get("http://localhost:8080/getsong");
    setGetData(res.getDatadata.data);
  };

  // let deleteapi = async (songid) => {
  //   let res=await axios.delete(`http://localhost:8080/deletesong/${songid}`);
  //   apiFetch();
  //   if(res.data.error){
  //     alert(res.data.error);
  //   }
  //   else{
  //     alert(res.data.message);
  //   }
  // };

  // let addapi = async () => {
  //   let res = await axios.post("http://localhost:8080/postsong",addData);
  //   if(res.data.error){
  //     alert(res.data.error);
  //   }
  //   else{
  //     alert(res.data.message);
  //   }
  //   apiFetch();
  // };

  // let editapi = async () => {
  //   let res = await axios.put("http://localhost:8080/putsong",editData);
  //   if(res.data.error){
  //     alert(res.data.error);
  //   }
  //   else{
  //     alert(res.data.message);
  //   }
  //   apiFetch();
  // };

  //getapi

  const [data, setData] = useState([]);
  const [songurldata, setSongUrlData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getsong')
      .then(response => {
        setData(response.data);
        setSongUrlData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const postRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while making the POST request.');
    }
  };

  const putRequest = async (url, data) => {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while making the PUT request.');
    }
  };
  const deleteRequest = async (url) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while making the DELETE request.');
    }
  };
    
  const handleAdd = () => {
    postRequest('http://localhost:8080/postsong', addData)
      .then((data) => {
        alert(data.message);
        apiFetch();
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  const handleEdit = () => {
    putRequest('http://localhost:8080/putsong', editData)
      .then((data) => {
        alert(data.message);
        apiFetch();
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  const handleDelete = (songid) => {
    deleteRequest(`http://localhost:8080/deleteplay/${songid}`)
      .then((data) => {
        alert(data.message);
        apiFetch();
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  const [showAdd, setShowAdd] = useState(false);

  // const handleOpenAdd = () => {
  //   setShowAdd(true);
  // };

  // const handleCloseAdd = () => {
  //   setShowAdd(false);
  // };
  // const [showModal, setShowModal] = useState(false);
  const handleOpenAdd = () => {
    setShowAdd(true);
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
  };

  const counter=useSelector((state)=>state.counter);
  const increment =()=>{
    dispatch({type:"INC"})
  }
 

  // const handlePlay = (songUrl) => {
  //   const audioPlayer = new Audio(songUrl);
  //   audioPlayer.play();
  // };

  return (
   
    <div className="body">

        <div className='listname'>
          <h2 style={{margin:"0px",padding:"40px 0 0 20px",alignItems:"center"}}><FaSpotify /> My Playlist</h2>
        </div>

        <div className='playmus'>
          <div ref={editRef} className='' onClick={()=>{setOpenEdit(!openedit)}}>
            <FaPlay onClick={"handleOverlay"} size={20} style={{color:"black",padding:'5px'}} />&nbsp;
            <FaEllipsisV style={{color:'black',padding:" 9px 50px 4px 20px"}}  size={25}/>
            {/* <h6>Like{counter+1}</h6> */}
          </div>
          <div className='add'>
            <button onClick={handleOpenAdd} className="addbutton" >Add</button>
          <Link to="Put"><button className="addbutton" >Edit</button></Link>
          <Link to="Delete"><button className="addbutton">Delete</button></Link>
          </div>
        </div>

        <div className={`edit-menu ${openedit? 'active' : 'inactive'}`} >
        <RWebShare
				data={{
          url: "http://localhost:3000/Playlist1",
				}}
				onClick={() => console.log("shared successfully!")}>
        <Link to="Share"><button className="editbutton" >Share</button></Link>
	
			</RWebShare>
         
        </div>
       
        {/* {showAdd && <Post onClose={handleCloseAdd} />} */}

        {showAdd && (
        <div className="modal-container">
          <div className="modal-content">
            <Post />
           <button className="close-button" onClick={handleCloseAdd}>Close</button>
          </div>
        </div>
      )}
         <div>
            {/* <div className='song2'>
              <span>SNo</span>
              <span>Song</span>
              <span>Album</span>
              <span>Artist</span>
              <span>Duration</span>
            </div> */}
            <div>
            {/* <table id="songs" border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Options</th>
             
            </tr>
          </thead>
          <tbody> */}
          <table id="songs" border={1}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col"></th>
            <th>Name</th>
            <th>Likes</th>
            {/* <th scope="col">Url</th>
            <th scope="col">Delete</th> */}
          </tr>
        </thead>
        {data.map((play) => {
          return (
            <>
            
              <tbody>
                <tr key={play.songid}>
                  <td>{play.songid}</td>
                  <td ><img src={play.songurl} style={{height:'50px',width:'50px'}} alt='' /></td>
           
            
                  <td onClick={() => {handleLike(play.songid) }}>
                  {play.songname}</td>
              
                  <td onClick={() => handleLike(play.songid)}>
                {likedSongs[play.songid] ? (
                  <span style={{ color: 'red' }}>
                    <FaHeart />
                  </span>
                ) : (
                  <span style={{ color: 'black' }}>
                    <FaHeart />
                  </span>
                )}
                </td>
                 
                </tr>
                
              </tbody>
              
            </>
          );
        })}
        
        
        </table>
    <div className='audioplayer'>
        <AudioPlayer autoPlay src={'Summertime'} onPlay={(e) => console.log("onPlay")} />
        </div>

            </div>
         
            <div>
                  
      {/* <Slider percentage={percentage} onChange={onChange} />
      <audio ref={audioRef} onTimeUpdate={getCurrDuration} onLoadedData={(e) => {setDuration(e.currentTarget.duration.toFixed(2))}}
       src={currentSongUrl}></audio>
      <ControlPanel play={play} isPlaying={isPlaying} duration={duration} currentTime={currentTime} /> */}
     



      </div>
             
            <div>
             
             
              </div>

           
          {/* <button addapi={addapi} addData={addData} setAddData={setAddData}>Add</button>
          <button apiFetch={apiFetch}>Fetch</button> */}
            {/* <div className='song1'  draggable="true" >
              <div className=''>
                <span>1</span>
              </div>

              <div className=''>
                <span><FaMusic />Song 1</span>
              </div>

              <div className=''>
                <span>Album 1</span>
              </div>
              
              <div className=''>
                <span>Artist 1</span>
              </div>

              <div className=''>
                <span>2:20</span>
              </div>
            </div> */}
          </div>



          {/* <div className="music-player">
            <audio controls loop >
              <source src="https://gaana.com/song/ranjha-from-shershaah" type="audio/mp3" />
            </audio>
          </div> */}
      </div> 
      );
    };
export default Playlist1;

function EditItem(props){
  return(
    <li className = 'editItem'>
        <p> {props.text} </p>
    </li>
  );
}