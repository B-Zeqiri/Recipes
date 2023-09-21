import React, {useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import { MainContext } from '../Context/MainContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../Style/HomePage.css'

const HomePage = () => {

  const recipes = useContext(MainContext);
  const navigate = useNavigate();

  const checkLogin=()=>{
    const token = localStorage.getItem("token");
    if(token === null){
      navigate("/");
    }
  };

  useEffect(()=>{
    checkLogin();
  },[]);


  return (
    <div className='homePageWrapper'>
    <Header/>
    <Banner recipes={recipes}/>
    <Footer/>
    </div>
  )
}

export default HomePage