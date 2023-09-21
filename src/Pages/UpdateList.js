import React, { useContext, useEffect } from "react";
import '../Style/UpdateList.css'
import { MainContext } from "../Context/MainContext";
import UpdateRecipe from "../Components/UpdateRecipe";
import Header from "../Components/Header";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const UpdateList = () => {

  const notify = () => toast("Your Recepie is Updated Seccessful!", { autoClose: 2000 });
  

  const navigate=useNavigate();

  const checkLogin=()=>{
    const token = localStorage.getItem("token");
    if(token === null){
      navigate("/");
    }
  };

  useEffect(()=>{
    checkLogin();
  },[]);

    const {recipes} = useContext(MainContext);

  return (
    <div className="bigBoss">
      <Header/>
        <h2>Update Recipes</h2>
        <div className="updateListWrapper">
      {recipes.map((recipe) => (
          <UpdateRecipe recipe={recipe} notify={notify}/>
      ))}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default UpdateList