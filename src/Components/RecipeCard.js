import React from 'react';
import '../Style/RecipeCard.css';

 


  const RecipeCard = ({title, body}) => {
   
    return (
      <div className='cardWrapper'>
          <div className='card'>
            <div className='aboveCard'>
              <h2>{title ? title: null}</h2>
            </div>
            <div className='bottomCard'>
              <p>{body}</p>
            </div>
          </div>
      </div>
    );
  };
  
  export default RecipeCard;
  