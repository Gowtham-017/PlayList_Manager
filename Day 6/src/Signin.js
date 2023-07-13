// import React from 'react';
// import './Navbar.css';

// const LoginPage = () => {
//   return (
//     <div className="login-page">
      
//       <div className="company-section">
//         <h1>Company Name</h1>
//       </div>

//       <div className="login-section">
//         <h2>Login</h2>
       
//       </div>

//     </div>
//   );
// };

// export default LoginPage;






// import { useMediaQuery } from 'react-responsive'
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './Google';
// import * as firebase from 'firebase';
// import firebase from 'firebase'
// import 'firebase/auth';

import React, { useState,useEffect} from 'react';
import './Signin.css';
import {Link} from "react-router-dom"
import { FaInstagram,FaYoutube,FaTwitter, FaMobile, FaGoogle, FaHeart } from 'react-icons/fa';



// firebase.initializeApp({
//   apiKey: "AIzaSyDJT_W4GhvIU38hEw-FU8V4mRcqR9fys6E",
//   authDomain: "playlist-1ddc8.firebaseapp.com",
//   projectId: "playlist-1ddc8",
//   storageBucket: "playlist-1ddc8.appspot.com",
//   messagingSenderId: "266406626860",
//   appId: "1:266406626860:web:b31bec656813f8feee3389"
// })
// const auth = firebase.auth();

const LoginPage = () => {
  
//   const signInWithGoogle = async() => {
//     try{
//       await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//     }
//     catch(err){
//       console.log(err);
//     }
//  }
  



  
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
   
    <div className="login-page">
     
      <div className="company-section">
        <div className='logo'></div>
        {/* <h1>Mucify  <FaMusic className='music'/></h1> */}
        {/* <h3>Feel the music you <FaHeart /></h3> */}
        <div className='footer1'>
         <h3 className='rights'>@2023 All Rights Reserved   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaInstagram size={20} className='icon'/></a>&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaTwitter size={20} className='icon' /></a>&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaYoutube size={20} className='icon' /></a>&nbsp;&nbsp;
         </h3>
        </div>
      </div>
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
          {/* <input type='checkbox' className='checkbox' ></input> */}<br />
          {/* <h6 className='policy'>By continuing, you agree to Privacy Policy</h6> */}
          {/* <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          /> */}
          <button type="submit" className='signinbutton'><Link to="Sidebar">Log In</Link></button>
          <h4>------------- or ----------------</h4>
          {/* <GoogleOAuthProvider clientId="">
          <Google />
        </GoogleOAuthProvider>  <br/> */}
          <button type="button"  className='continue'><FaGoogle className='music'/>  Continue with Google</button><br />
          <br />
         
          <button type="button" className='continue'><FaMobile className='music'/>  Continue with Number</button>
          <br /><br />
        </form>
        <br />
          <h4 className='newuser'>New User?</h4>
          <button type="button" className='signinbutton'><Link to="signup">Create new Account</Link></button></div>  
      </div>
      <div>
    </div>
    </div>

  );
};

export default LoginPage;
