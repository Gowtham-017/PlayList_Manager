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







import React, { useState } from 'react';
import './Signin.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google';
import {Link} from "react-router-dom"
import { FaInstagram,FaYoutube,FaTwitter, FaMobile, FaMusic, FaHeart } from 'react-icons/fa';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Login form submitted');
    console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <div className="login-page">
      
      <div className="company-section">
        <div className='logo'></div>
        {/* <h1>Mucify  <FaMusic className='music'/></h1> */}
        {/* <h3>Feel the music you <FaHeart /></h3> */}
        <div className='footer'>
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
          <button type="submit"><Link to="Sidebar">Log In</Link></button>
          <h4>------------- or ----------------</h4>
          <GoogleOAuthProvider clientId="">
          <Google />
        </GoogleOAuthProvider>  <br/>
         
          <button type="button" className='continue'><FaMobile className='music'/>  Continue with Number</button>
          <br /><br />
        </form>
        <br />
          <h4 className='newuser'>New User?</h4>
          <button type="button"><Link to="signup">Create new Account</Link></button></div>  
      </div>
      <div>
    </div>
    </div>
  );
};

export default LoginPage;
