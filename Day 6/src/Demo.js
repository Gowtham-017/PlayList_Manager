import React, { useState,useEffect} from 'react';

import {Link} from "react-router-dom"
import { FaInstagram,FaYoutube,FaTwitter, FaMobile, FaGoogle, FaHeart } from 'react-icons/fa';


const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', email);
  };
 
  return (
   
    
    <div className="login1-page">
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
         
           <input
            type="password"
            placeholder="Password"
            // value={}
            // onChange={}
            required
          /> 
          <button type="submit" className='signinbutton'><Link to="Sidebar">Log In</Link></button>
        
        </form>
        </div>  
      </div>

  );
};

export default LoginPage;
