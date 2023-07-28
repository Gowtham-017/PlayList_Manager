import React, { useEffect, useState} from 'react';
import './Signin.css';
import {Link} from "react-router-dom"
import { FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import axios from 'axios';




const LoginPage = () => {
  
  
  //oauth
  const[user,setUser]=useState({});
  function handleCallbackResponse(response){
    console.log("JWT ID token: "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    const userData = {
      username: userObject.name,
      useremail: userObject.email,
      userpicture:userObject.picture,
    };
    // handleDatabase(userData);
    document.getElementById('signInDiv').hidden = true;
    // history.push('./Sidebar');
    history.push({
      pathname: '/Sidebar',
      state: { userData } 
    });
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"912529291014-1tduuoi6s7n4klocf280h2j844qs15lv.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
    // google.accounts.id.prompt();
  });


  
  //handle database
  //post login data
  const handleDatabase = async (userData) => {
    try {
      await postapi(userData);
    }catch (error) {
      console.error("Error posting data:", error);
    }
  };
  
  const postapi = async (userData) => {
    try {
      await axios.post('http://localhost:8080/api/v1/auth/authenticate', userData);
      alert("Successfully Added the Data");
    }catch (error) {
        console.log(error.response.data);
        alert("Error occurred while adding data");
    }
  };

  //Authentication.............................
  // const handleLoggin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const useremailExists = await checkIfUserExists(email);
  //     if (useremailExists ) {
      
  //       // alert('User already registered! Proceed with verification.');
  //       history.push('./Sidebar'); 
  //       // }
  //     } else {
  //       alert('User not registered. Please create an account.');
  //       history.push('./Signup'); 
  //     }
  //   } catch (error) {
  //     console.log('Error checking user existence:', error);
  //     alert('Error occurred while checking user existence');
  //   }
  // };
  // const checkIfUserExists = async (email) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/checkuser/${email}`);
  //     return response.data.exists;
  //   } catch (error) {
  //     console.log('Error checking user existence:', error);
  //     return false;
  //   }
  // };
  

  
//......................................................
    

  //login with mail
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [apiError, setApiError] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogCred = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = {
  //     email,
  //     password,
      
  //   };
  //   try {
  //     await axios.post('http://localhost:8081/api/v1/auth/authenticate', data);
  //     alert("Successfully Added the Data");
  //   } catch (error) {
  //     console.log(error);
  //     alert("Error occurred while posting data");
  //   }
  // };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email and password
    let isValid = true;

    // Email validation
    if (!email.trim()) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Please enter your password');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
          email: email,
          password: password
        });

        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));

        alert("Login Successful.");
        history.push('./Sidebar');
      } catch (error) {
        console.error('Error:', error);     
        setApiError('*Invalid email or password');
      }
    }
  };





  
return (
  <div className="login-page">
    {/* left section
      <div className="company-section">
        <div className=''><h1>Musify</h1></div>
          <div>   
            {user &&
            <div><img src={user.picture} alt=''></img>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
            </div>
            }
          </div>
        footer components
          <div className='footer1'>
            <h3 className='rights'>@2023 All Rights Reserved  </h3>
            <a href="https://www.instagram.com/"><FaInstagram size={20} className='icon'/></a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/"><FaTwitter size={20} className='icon' /></a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/"><FaYoutube size={20} className='icon' /></a>&nbsp;&nbsp;
          </div>
      </div> */}

        {/* right section */}
          <div className="login1-page">
           
            <div className="login-container">
            <div>   
            {/* {user &&
            <div><img src={user.picture} alt=''></img>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
            </div>
            } */}
          </div>
              <h2>Sign In</h2>
              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                <br /><br />
                <button type="submit"  onClick={"handleLoggin"} className='signinbutton'>Log In</button>
                <h4>____________ Or ____________</h4>
                {/* <button type="button" onClick={handleDatabase} id='signInDiv'></button>  */}
               <center> <div  onClick={handleDatabase} id='signInDiv' ></div> </center>
              </form><br />
                {/* <h4>------------- or ----------------</h4> */}
              <h4 className='newuser'>New User?</h4>
              <button type="button" className='signinbutton'><Link to="signup">Create new Account</Link></button></div>  
              {/* footer components */}
          {/* <div className='footer1'>
            <h5 className='rights'>@2023 All Rights Reserved  </h5>
            <a href="https://www.instagram.com/"><FaInstagram size={20} className='icon'/></a>
            <a href="https://www.instagram.com/"><FaTwitter size={20} className='icon' /></a>
            <a href="https://www.instagram.com/"><FaYoutube size={20} className='icon' /></a>
          </div> */}
            </div>
            
          <div>
          
        </div>
    </div>
  );
};
export default LoginPage;
