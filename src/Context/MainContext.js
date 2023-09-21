import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();


const MainProvider = ({ children }) => {
  
  const [recipes, setRecipes] = useState([]);

  const [loginMsg, setLoginMsg] = useState();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const [loading, setLoading]= useState(true);

  const [users, setUsers] = useState([]);

  const [addRecipes, setAddRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    await axios
      .get("https://usman-fake-api.herokuapp.com/api/recipes")
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const login = async (email, password) => {
    await axios
      .post("https://usman-fake-api.herokuapp.com/api/auth", {
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data);

        setLoginMsg("");
        setIsLogedIn(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoginMsg(error.response.data);
      });
  };

  const logout = ()=>{
    localStorage.removeItem('token');
    setIsLogedIn(false);
    setLoggedOut(true);
    window.location.href='/';
  }
  const apiUrl = 'https://usman-fake-api.herokuapp.com/api/users';

  const addUser = async (name, email, password) => {
    try {
      const response = await axios.post(apiUrl, {
        'name':name,
        'email':email,
        'password':password
      });
      setUsers([...users, response.data]);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const postRecipes = async (title, body)=>{
    try{
      const response = await axios.post(
        "https://usman-fake-api.herokuapp.com/api/recipes",
        {title, body}
      );
      setAddRecipes([...addRecipes, response.data]);
      setTimeout(()=>{
        window.location.href='/HomePage';
      },2000);
    }catch (error){
      console.log(error);
    }
  };

  const updateRecipe = async (id, updatedTitle, updatedBody) => {
    try {
      const response = await axios.put(
        `https://usman-fake-api.herokuapp.com/api/recipes/${id}`,
        {
          
          title: updatedTitle,
          body: updatedBody,
        }
      );
      const updatedRecipes = recipes.map((recipe) =>
        recipe._id === id ? response.data : recipe
      );
      setTimeout(() => {
        window.location.href = '/HomePage';
      }, 2000);
  
      setRecipes(updatedRecipes);
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };
  
  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`https://usman-fake-api.herokuapp.com/api/recipes/${id}`);
      const updatedRecipes = recipes.filter((recipe) => recipe._id !== id);
      setRecipes(updatedRecipes);
      window.location.href='/HomePage';
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <MainContext.Provider value={{ recipes, 
                                   login, 
                                   loginMsg,
                                   isLogedIn, 
                                   logout, 
                                   loggedOut, 
                                   users, 
                                   addUser, 
                                   loading,
                                   setLoading,
                                   addRecipes,
                                   postRecipes,
                                   updateRecipe,
                                   deleteRecipe }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
