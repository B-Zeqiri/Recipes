import React, { useContext, useState , useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Style/AddRecipes.css'
import { MainContext } from '../Context/MainContext'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


const AddRecipes = () => {

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

    const notify = () => toast("Your New Recepie is Added!", { autoClose: 2000 });

    const [message, setMessage] = useState("");

    const {postRecipes} = useContext(MainContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit=()=>{
        postRecipes(title, body);
        setTitle("");
        setBody("");
        notify();
    }



  return (
    <div >
        <Header/>
        
        <div className='addRecipeWrapper'>
            <h2>Add Recipe</h2>
            <div className='titleDiv'>
                <label htmlFor='title'>Title</label>
                <input placeholder='write title...' 
                       type='text' 
                       id='title' 
                       name='title' 
                       value={title} 
                       onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='bodyDiv'>
            <label htmlFor='body'>Recepie</label>
                <textarea placeholder='write recepie...' 
                          type='text' 
                          id='body' 
                          name='body'
                          value={body}
                          onChange={(e)=>setBody(e.target.value)}/>
            </div>
            <div className='buttonDiv'>
                <button onClick={()=>{
                    if(title === "" || body === ""){
                        setMessage('Please fill all the areas.');
                    }else{
                        setMessage('');
                        handleSubmit();
                    }
                }} >Add Recipe</button>
            </div>
            <ToastContainer/>
            {message }
        </div>
        <Footer/>
    </div>
  )
}

export default AddRecipes