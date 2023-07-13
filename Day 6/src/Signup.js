// import React, { useState } from 'react';
// import './Signup.css'
// function Signup() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleNameChange = (event) => {
//         setName(event.target.value);
//       };
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     };
  
//     const handleupSubmit = (event) => {
//       event.preventDefault();
//      alert.window("Account Created Successfully");
//       console.log('Name:', name);
//       console.log('Email:', email);
//       console.log('Password:', password);
//     };
//   return (
//     <div>
        
//         <div className="logoutpage">
//       <div className="logoutcontainer">
//         <h2>Create Your Account</h2>
//         <form onSubmit={handleupSubmit}>
//           <input
//             type="text"
//             className='upinput'
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//          <input
//             type="email"
//             className='upinput'
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="password"
//             className='upinput'
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           <br />
//           <button type="submit" className='upbutton'>Sign Up</button>
          
//         </form>
//         </div>
//         </div>
        
//     </div>
//   )
// }

// export default Signup



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
import './Signup.css';

import {Link} from "react-router-dom"
import { FaHeart } from 'react-icons/fa';
const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleupSubmit = (event) => {
      event.preventDefault();
     alert.window("Account Created Successfully");
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <div className="signup-page">
      
      <div className="signup-section">
      {/* <h1>Mucify  <FaHeart/></h1> */}
      {/* <br /> */}
       <div className='signuplogo'></div>
        {/* <h3>Join Us to Feel the music...</h3> */}
      </div>
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Create Your Account</h2>
      <br /><br />
         <form onSubmit={handleupSubmit}>
           
           <input
            type="text"
            className='signupinput'
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
         <input
            type="email"
            className='signupinput'
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className='signupinput'
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button type="submit" className='signupbutton'><Link to="Signin">Sign Up</Link></button>
          
        </form>
      </div>
    </div>
    
    </div>
  );
};

export default SignupPage;
