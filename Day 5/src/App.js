import React from 'react'
import Signin from './Signin'

import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Signup from './Signup';
import Home from './Components/Home';
import Playlist1 from './Playlist1';
import Header from './Components/Header';



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
        <Route exact path="/Playlist1" component={Playlist1}></Route>/
   
        

    
       </Switch>
    </div> 
  </Router> 
      {/* <Header /> */}
    </div>
  )
}

export default App