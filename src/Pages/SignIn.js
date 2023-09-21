import React, { useContext, useState } from 'react'
import Header from '../Components/Header'
import '../Style/SignIn.css'
import { Link } from 'react-router-dom'
import { MainContext } from '../Context/MainContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

  const { addUser } = useContext(MainContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const notify = () => toast("You signed up successfuly!", { autoClose: 2000 });

  const handleAddUser = () => {
    addUser(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
    notify();
  };


  return (
    <>
        <Header/>
        <div className='SiginWrapper'>
            <h2>Sign In</h2>
            <label htmlFor='name'>Name</label>
            <input type='text'name='name' id='name'value={name} placeholder='type your name...'onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'name='email' value={email} placeholder='type your email...' onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' value={password} placeholder='type your passsword...' onChange={(e)=>setPassword(e.target.value)}/>
            <div className='divButton'>
                <button
                   onClick={()=>{
                    if(name === '' && email === ''&& password === ''){
                      setMessage('Ju lutem plotesoni te gjitha fushat.')
                    }else{
                      setMessage('');
                      handleAddUser();
                    }
                   }}
                >Sign In</button>
                <ToastContainer/>
            </div>
            <p>If you have an account return to <i><b><Link to='/' className='signinLink'>Login</Link></b></i></p>
        </div>
    </>
  )
}

export default SignIn