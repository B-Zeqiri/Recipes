import React, { useContext } from 'react'
import '../Style/Banner.css'
import RecipeCard from './RecipeCard'
import Slideshow from './Slideshow';
import { MainContext } from '../Context/MainContext';
import ReactLoading from 'react-loading';


const Banner = (recipes) => {

  const {loading, setLoading} = useContext(MainContext);
  
  return (
    <>
    <div className='slideshowWrapper'>
      <Slideshow/>
    </div>
    <div className='bannerWrapper'>
      {
        loading ? (
          <div className='loadingDIv'>
          <ReactLoading type='cylon' color='white' height={100} width={100} />
          </div>
        ):(
          recipes.recipes.recipes.map((recipe, i)=>(
            <RecipeCard 
            title={recipe.title}
            body={recipe.body}
            key={i}
            />
            )
          ) 
        )
      
      }
       
    </div>
    </>
  );
};

export default Banner