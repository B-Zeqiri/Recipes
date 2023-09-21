import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../Context/MainContext";
import '../Style/UpdateRecipe.css'

const UpdateRecipe = ({ recipe, notify }) => {


  const { updateRecipe, deleteRecipe } = useContext(MainContext);

  // Initialize state variables with values from the 'recipe' prop
  const [updatedTitle, setUpdatedTitle] = useState(recipe.title || "");
  const [updatedBody, setUpdatedBody] = useState(recipe.body || ""); 

  const handleUpdate = () => {
    updateRecipe(recipe._id, updatedTitle, updatedBody);
    notify();
  };

  const handleDelete = () => {
    deleteRecipe(recipe._id);
    
  };

  return (
    <div className="cardWrapper" key={recipe._id}>
      <input className="updateTitleArea"
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <textarea
      className="updateBodyArea"
        value={updatedBody}
        onChange={(e) => setUpdatedBody(e.target.value)}
      ></textarea>
      <button className="submitUpdateButton" onClick={handleUpdate}>Update</button>
      <button className="submitDeleteButton" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UpdateRecipe;
