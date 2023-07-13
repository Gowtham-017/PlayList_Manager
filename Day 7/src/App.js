import React from 'react'
import Signin from './Signin'
import { useMediaQuery } from 'react-responsive'
import './responsive.css'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Signup from './Signup';
import Home from './Components/Home';
import Playlist1 from './Playlist1';
import Header from './Components/Header';
import Demo from './Demo'
import Demo2 from './Demo2'
import NewPlayList from './Components/NewPlayList'



function App() {
  return (
    <div>
      <Router>
    <div className="App"> 
        <Switch>
       
        <Route exact path="/" component={Signin}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Signin" component={Signin}></Route>
        <Route exact path="/Sidebar" component={Sidebar}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/NewPlayList" component={NewPlayList}></Route>
        <Route exact path="/Playlist1" component={Playlist1}></Route>/

       </Switch>
    </div> 
  </Router> 
      {/* <Demo2 /> */}
    </div>
  )
}

export default App