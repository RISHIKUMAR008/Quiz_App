import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const [SignState,setSignState] =useState("Sign In");

  return (
    <div className='login'>
      <img src='' alt="" className='login-logo'/>
      <div className="login-form">
        <h2 className='sign'> {SignState}</h2>
        <form action="../Quiz/Quiz.jsx">
          {SignState ==="Sign Up"? <input type="text" placeholder='Name'/> :<></>}
          
          <input type="email"placeholder='Email' />
          <input type="password" placeholder='Password'/>
          <button >Sign Up</button>
          <div className="form-help">
            
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {SignState ==="Sign In"? <p>New user ?
            <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have an account? 
            <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}

        </div>
      </div>
      
    </div>
  )
}

export default Login
