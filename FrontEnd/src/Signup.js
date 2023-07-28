// import React, { useState } from 'react';
// import './Signup.css';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// const SignupPage = () => {

//   const [usersname, setUsersName] = useState('');
//   const [usersemail, setUsersEmail] = useState('');
//   const [userspassword, setUsersPassword] = useState('');
//   const [role,setRole]=useState('USER')
//   const history = useHistory();
    
//   const handleUsersNameChange = (event) => {
//     setUsersName(event.target.value);
//   };
//   const handleUsersEmailChange = (event) => {
//     setUsersEmail(event.target.value);
//   };
//   const handleUsersPasswordChange = (event) => {
//     setUsersPassword(event.target.value);
//   };
 
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const data = {
//   //     usersname,
//   //     usersemail,
//   //     userspassword,
//   //     role
      
//   //   };
//   //   // try {
//   //   //   await axios.post('http://127.0.0.1:8081/api/v1/auth/register', data);
//   //   //   alert("Successfully Added the Data");
//   //   // } catch (error) {
//   //   //   console.log(error);
//   //   //   alert("Error occurred while posting data");
//   //   // }
  
//   // }
//   // };
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     console.log(usersname, usersemail, userspassword, role);
//     let pass=userspassword; 
//     const registrationData = {
    
//       usersname,
//       usersemail,
//       userspassword,
//       role
      
//     };
//     try {
//       const response = await fetch('http://localhost:8181/api/v1/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(registrationData),
//       });
//       if (response.status === 200) {
//         history.push('/Signin');
//         setUsersName('');
//         setUsersEmail('');
//         setUsersPassword('');

//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }

// return (
//   <div className="signup-page">
//     <div className="signup-section">
//       <div className='signuplogo'></div>
//     </div>
//     <div className="signup1-page">
//       <div className="signup-container">
//         <h2>Create Your Account</h2><br /><br />
//         <form onSubmit={handleSubmit}>
//           <input type="text" className='signupinput' placeholder="Name" value={usersname} onChange={handleUsersNameChange} required/>
//           <input type="email" className='signupinput' placeholder="Email"value={usersemail} onChange={handleUsersEmailChange} required/>
//           <input type="password" className='signupinput' placeholder="Password" value={userspassword} onChange={handleUsersPasswordChange} required/>
          
//           <br />
//           <button type="submit" className='signupbutton'>Sign Up</button>
//         </form>
//       </div>
//     </div>
//   </div>
//   );
// };
// export default SignupPage;


// import React, { useState } from 'react';
// import './Signup.css';
// import {Link} from "react-router-dom"
// import axios from 'axios'
// import { useHistory } from 'react-router-dom';



// const SignupPage = () => {
//      const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmpassword, setConfirmPassword] = useState('');
//    ;
//     // const [registrationError,setRegistrationError] = useState('');
//     const history=useHistory();

//     const checkPassword = (e) =>{
//       const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//       if (!passwordRegex.test(password)) {
//         window.alert(
//           "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
//         );
//         initialize1()
//         return;
//       }
//       else if (password !== confirmpassword) {
//         window.alert("Passwords do not match.");
//         initialize2()
//         return;
//       }
//       else{
//         window.alert("Registration Successful !!!");
//       }
//     }
//     const initialize1 = () =>{
//       setPassword('')
//       setConfirmPassword('')
//     }
//     const initialize2 = () =>{
//       setConfirmPassword('')
//     }
  
//     const handleNameChange = (event) => {
//         setName(event.target.value);
//       };
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     };
    
//     const handleConfirmPasswordChange = (event) => {
//       setConfirmPassword(event.target.value);
//     };

   

//     const handleSubmit= async (e)=>{
//       e.preventDefault();
//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:8081/api/v1/auth/register",
//           {
//             name,
//             email,
//             password,
//             // confirmpassword,
//           },
//         );
  
//         console.log("Sign in successful");
//         console.log(response.data); 
//         history('/');
  
//         // setName("");
//         // setEmail("");
//         // setMobile("");
//         // setPassword("");
//         // setRegistrationError("");
//       } catch (error) {
//         console.error("Registration failed");
//         console.error(error); 
  
//       }
//   }
    
//   return (
//     <div className='logo1'>
//     <div className="signup-page"> 
//     <div className="signup1-page">
//       <div className="signup-container">
//       <h2>Create Your Account</h2>
//       <p className='ab1'>.....................................................................................</p>
//          <form onSubmit={handleSubmit}>
//          <h4 className='a1'>Username:</h4>
//            <input
//             type="text"
//             className='signupinput'
//             placeholder="Enter your Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />

//         <h4 className='a1'>Email:</h4>
//          <input
//             type="email"
//             className='signupinput'
//             placeholder="Enter your Email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />

         

//           <h4 className='a1'>Password:</h4>
//           <input
//             type="password"
//             className='signupinput'
//             placeholder="Enter New Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />


//           <h4 className='a1'>Confirm Password:</h4>
//           <input
//             type="password"
//             className='signupinput'
//             placeholder="Re Enter New Password"
//             value={confirmpassword}
//             onChange={handleConfirmPasswordChange}
//             required
//           />

//          <br/>
//           <button type="submit" onClick={''} className='signupbutton'><b>Sign Up</b></button>
//             <h3>------------- or -------------</h3>
//         </form>
//         <h4 className='a1'>Existing User?</h4>
//           <div className="create1"><Link to="/"><div className="b1"><u>Log Into Your Account</u></div></Link></div>  
//           </div>
//       </div>
//     </div>
    
//     </div>
//   );
// };

// export default SignupPage;






import React, { useState } from 'react';
import './Signup.css';
import {Link} from "react-router-dom"
import axios from 'axios'
import { useHistory } from 'react-router-dom';



const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    
    // const [registrationError,setRegistrationError] = useState('');
    const history=useHistory();

    const checkPassword = (e) =>{
      const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        window.alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        initialize1()
        return;
      }
      else if (password !== confirmpassword) {
        window.alert("Passwords do not match.");
        initialize2()
        return;
      }
      else{
        window.alert("Registration Successful !!!");
      }
    }
    const initialize1 = () =>{
      setPassword('')
      setConfirmPassword('')
    }
    const initialize2 = () =>{
      setConfirmPassword('')
    }
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

   
    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:8082/api/v1/auth/register",
          {
            name,
            email,
            password,
            // confirmpassword,
          },
        );
  
        console.log("Sign in successful");
        console.log(response.data); 
        history.push('/Signin');
  
        setName("");
        setEmail("");
        setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
  
      }
  }
    
  return (
    <div className='logo1'>
    <div className="signup-page"> 
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Create Your Account</h2>
   
         <form onSubmit={handleSubmit}>
       
           <input
            type="text"
            className='signupinput'
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            required
          />

       
         <input
            type="email"
            className='signupinput'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          

          
          <input
            type="password"
            className='signupinput'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

         
          <input
            type="password"
            className='signupinput'
            placeholder="Re Enter New Password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            required
          /><br/>
          <button type="submit" onClick={checkPassword} className='signupbutton'><b>Sign Up</b></button>
            <h3>------------- or -------------</h3>
        </form>
        <h4 className='a1'>Existing User?</h4>
          <div className=""><Link to="/"><div className="b1">Log In</div></Link></div>  
          </div>
      </div>
    </div>
    
    </div>
  );
};

export default SignupPage;