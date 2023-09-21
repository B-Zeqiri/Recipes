import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import '../Style/LogIN.css'
import { MainContext } from '../Context/MainContext'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {

  const {login, loginMsg, isLogedIn} = useContext(MainContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] =useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    } else {
      navigate("/HomePage");
    }
  };
  
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
     <Header/>
    <div className='LoginWrapper'>
        <div className='Login'>
            <h2>Login</h2>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='type your email...' id='email' onChange={(email)=>{setEmail(email.target.value)}}/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='type your password...' id='password' onChange={(password)=>{setPassword(password.target.value)}}/>
            {!message === "" ? <></> : <p>{message}</p>}{""}
            {!loginMsg === "" ? <></> : <p>{loginMsg}</p>}
            <div className='divButton'>
            <button onClick={()=>{
              if(email === "" && password === ""){
                setMessage("Ju duhet te i plotesoni te gjitha fushat ne menyre qe te vazhdoni.");
              }else{
                setMessage("");
                login(email, password);
                if(isLogedIn){
                  navigate("/HomePage");
                }else{
                  setMessageLogin("Ju lutem futuni ne llogari.");
                }
              }
            }}>Login</button>
            </div>
            <p>If you don't have an account click here <b><i><Link to="/SignIn" className='loginLink'>Sign In</Link></i></b></p>
        </div>
    </div>
    </>
   
  )
}

export default LogIn